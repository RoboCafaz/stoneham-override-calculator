/**
 * @fileoverview Custom React hook for Massachusetts Proposition 2½ override tax calculator.
 *
 * This hook implements the business logic for calculating the impact of a Proposition 2½
 * override on property tax bills in Stoneham, MA. It handles property search,
 * user input state management, and real-time tax impact calculations.
 *
 * ## Massachusetts Proposition 2½ Overview
 *
 * Proposition 2½ is a Massachusetts law that limits the amount of property tax revenue
 * a municipality can raise each year. An "override" is a permanent increase to the tax levy
 * that requires voter approval.
 *
 * ## Tax Rate Calculation Methodology
 *
 * The tax rate impact is calculated using the following formula:
 *
 * ```
 * New Tax Rate = Current Tax Rate + (Override Amount × Rate Impact Per Dollar)
 * ```
 *
 * Where:
 * - **Current Tax Rate**: The current tax rate per $1,000 of assessed value (dollars)
 * - **Override Amount**: The proposed override amount (dollars)
 * - **Rate Impact Per Dollar**: The residential tax rate increase per $1 of override,
 *   derived from MA DOR calculations (≈0.000150685 for Stoneham FY2025)
 *
 * ### Tax Bill Calculation
 *
 * Individual property tax bills are calculated as:
 *
 * ```
 * Annual Tax Bill = (Assessed Property Value / 1000) × Tax Rate
 * ```
 *
 * The impact calculations break down the annual increase into:
 * - **Annual Impact**: Full year increase
 * - **Quarterly Impact**: Annual / 4 (typical billing frequency)
 * - **Monthly Impact**: Annual / 12
 * - **Daily Impact**: Annual / 365
 *
 * ## Data Sources
 *
 * - Tax rates and ratios from MA Department of Revenue Division of Local Services (FY2025)
 * - Property assessments from Stoneham Patriot Properties public records
 *
 * @module use-calculator
 */

import { useEffect, useState, useCallback } from "preact/hooks";
import Fuse from "fuse.js";
import PROPERTIES from "./properties.json";

/**
 * The default override amount to populate the "Override" field with.
 * Set to $5,000,000 as a representative example.
 */
export const DEFAULT_OVERRIDE_AMOUNT = 5_000_000;

/**
 * The default assessed property value to populate the "Assessed" field with.
 * Set to $765,770, which is close to the median assessed value in Stoneham.
 */
export const DEFAULT_ASSESSED_VALUE = 765_770;

/**
 * The current tax rate for Stoneham, MA (FY2025).
 * Rate per $1,000 of assessed value.
 */
export const CURRENT_TAX_RATE = 10.23;

/**
 * The tax rate impact calculation constants for Stoneham, MA (FY2025).
 *
 * The relationship between override amount and tax rate impact is linear,
 * derived from 8 data points provided by Massachusetts DOR Division of Local Services:
 *
 * | Override Amount | Tax Rate Impact (per $1,000) |
 * |-----------------|------------------------------|
 * | $1,000,000      | $0.15                        |
 * | $5,000,000      | $0.75                        |
 * | $7,500,000      | $1.13                        |
 * | $10,000,000     | $1.51                        |
 * | $14,600,000     | $2.20                        |
 * | $20,000,000     | $3.02                        |
 * | $25,000,000     | $3.77                        |
 * | $50,000,000     | $7.55                        |
 *
 * Using linear regression on these points yields:
 *
 * **y = 0.00000015103764965009x - 0.00288889605331910104**
 *
 * Where:
 * - y = tax rate impact (dollars per $1,000 of assessed value)
 * - x = override amount (dollars)
 * - R² = 0.9999991 (near-perfect linear fit)
 * - Max error: 0.003052 (less than 1/3 cent per $1,000)
 *
 * This can be rewritten as rate impact per dollar:
 *
 * **rate_impact_per_dollar = (0.00000015103764965009x - 0.00288889605331910104) / x**
 *
 * Simplifying:
 * **rate_impact_per_dollar = 0.00000015103764965009 - 0.00288889605331910104/x**
 */
export const RATE_IMPACT_SLOPE = 0.00000015103764965009;
export const RATE_IMPACT_INTERCEPT = -0.00288889605331910104;

/**
 * Format a number as a dollar amount.
 *
 * @param val - The value to format in dollars
 * @returns A formatted dollar string (e.g., "$10.23")
 */
export const formatDollars = (val: number) =>
  val.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

/**
 * Fuse.js instance for fuzzy searching property addresses.
 *
 * Configured to search the "#" key (property address) in the PROPERTIES dataset
 * with a threshold of 0.2 for relatively strict matching.
 *
 * @remarks
 * The threshold value of 0.2 means the search is fairly strict - only close matches
 * will be returned. A value of 0.0 requires perfect matches, while 1.0 matches everything.
 */
const fuse = new Fuse(PROPERTIES, {
  keys: ["#"],
  threshold: 0.2,
});

/**
 * Property address and assessment information.
 *
 * Represents a single property record from the Stoneham assessor's database.
 */
export interface Address {
  /** The street address of the property */
  address: string;
  /** The assessed property value in dollars (not cents) */
  value: number;
}

/**
 * Calculated tax impact values for display.
 *
 * All values are formatted as USD currency strings for direct rendering in the UI.
 * The hook recalculates these values whenever the assessed value or override amount changes.
 */
export interface CalculatedValues {
  /** Current tax rate per $1,000 of assessed value (formatted as currency) */
  currentTaxRate: string;
  /** Proposed tax rate per $1,000 of assessed value after override (formatted as currency) */
  newTaxRate: string;
  /** Increase in tax rate per $1,000 of assessed value (formatted as currency) */
  newTaxRateImpact: string;
  /** Current annual tax bill before override (formatted as currency) */
  currentTaxBillYearly: string;
  /** Proposed annual tax bill after override (formatted as currency) */
  newTaxBillYearly: string;
  /** Current quarterly tax bill before override (formatted as currency) */
  currentTaxBillQuarterly: string;
  /** Proposed quarterly tax bill after override (formatted as currency) */
  newTaxBillQuarterly: string;
  /** Estimated annual tax increase (formatted as currency) */
  estimatedTaxImpactYearly: string;
  /** Estimated quarterly tax increase (formatted as currency) */
  estimatedTaxImpactQuarterly: string;
  /** Estimated monthly tax increase (formatted as currency) */
  estimatedTaxImpactMonthly: string;
  /** Estimated daily tax increase (formatted as currency) */
  estimatedTaxImpactDaily: string;
}

/**
 * Return type for the useCalculator hook.
 *
 * Provides all state values, computed values, and event handlers needed
 * to render and interact with the calculator UI.
 */
export interface UseCalculatorReturn {
  /** Whether property suggestions are currently loading from the search */
  isLoading: boolean;
  /** Array of property address suggestions from the fuzzy search */
  suggestions: Address[];
  /** The currently selected property from the address search */
  selectedProperty: Address | null;
  /** The current text in the address search input */
  query: string;
  /** The current assessed property value (in dollars, not cents) */
  assessedValue: number | undefined;
  /** The current override amount (in dollars) */
  overrideValue: number | undefined;
  /** All calculated tax impact values, formatted for display */
  calculatedValues: CalculatedValues;
  /** Handler called when a property is selected from the address dropdown */
  onPropertyChange: (property: Address | null) => void;
  /** Handler called when the address input text changes */
  onAddressInputChange: (event: Event) => void;
  /** Handler called when the assessed value input changes */
  onAssessedValueChange: (value: number | undefined) => void;
  /** Handler called when the override amount input changes */
  onOverrideValueChange: (value: number | undefined) => void;
  /** Function to compute the display value for the address combobox */
  getDisplayValue: (property: Address | null) => string;
}

/**
 * Custom hook that manages the calculator's business logic.
 *
 * This hook encapsulates all state management, event handlers, and tax calculations
 * for the Stoneham Proposition 2½ Override Calculator. It provides a clean interface
 * between the business logic and the React component layer.
 *
 * ## How It Works
 *
 * 1. **Property Search**: Uses Fuse.js for fuzzy searching of property addresses.
 *    Search results are debounced by 200ms to reduce unnecessary computation.
 *
 * 2. **State Management**: Manages user inputs (address, assessed value, override amount)
 *    and computed outputs (all tax impact calculations).
 *
 * 3. **Tax Calculations**: Automatically recalculates all tax impact values whenever
 *    the assessed value or override amount changes using a useEffect hook.
 *
 * 4. **Event Handlers**: All event handlers are wrapped in useCallback to prevent
 *    unnecessary re-renders and maintain stable function references.
 *
 * @returns Calculator state, computed values, and event handlers
 */
export const useCalculator = (): UseCalculatorReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Address[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Address | null>(
    null,
  );
  const [query, setQuery] = useState("");
  const [assessedValue, setAssessedValue] = useState<number | undefined>(
    DEFAULT_ASSESSED_VALUE,
  );
  const [overrideValue, setOverrideValue] = useState<number | undefined>(
    DEFAULT_OVERRIDE_AMOUNT,
  );
  const [calculatedValues, setCalculatedValues] = useState<CalculatedValues>({
    currentTaxRate: "",
    newTaxRate: "",
    newTaxRateImpact: "",
    currentTaxBillYearly: "",
    newTaxBillYearly: "",
    currentTaxBillQuarterly: "",
    newTaxBillQuarterly: "",
    estimatedTaxImpactYearly: "",
    estimatedTaxImpactQuarterly: "",
    estimatedTaxImpactMonthly: "",
    estimatedTaxImpactDaily: "",
  });

  /**
   * Searches for property addresses matching the given query.
   *
   * Uses Fuse.js to perform fuzzy searching and returns up to 10 results.
   * Results are mapped from the raw property data format to the Address interface.
   *
   * @param searchQuery - The text to search for in property addresses
   */
  const fetchSuggestions = useCallback(async (searchQuery: string) => {
    setIsLoading(true);
    try {
      const data = fuse
        .search(searchQuery)
        .slice(0, 10)
        .map(({ item }) => ({
          address: item["#"],
          value: item.$,
        }));
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Debounced version of fetchSuggestions.
   *
   * Delays the search by 200ms to avoid excessive computation while the user is typing.
   * Clears any pending search when a new search is initiated.
   *
   * @param searchQuery - The text to search for in property addresses
   */
  const debouncedFetchSuggestions = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (searchQuery: string) => {
        setIsLoading(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fetchSuggestions(searchQuery), 200);
      };
    })(),
    [fetchSuggestions],
  );

  /**
   * Effect hook that recalculates all tax impact values when inputs change.
   *
   * This is the core calculation logic that implements the Proposition 2½ override
   * tax impact formula. It runs whenever the assessed value or override amount changes.
   *
   * ## Calculation Steps:
   *
   * 1. Calculate the tax rate impact using linear equation: y = mx + b
   * 2. Calculate the proposed new tax rate
   * 3. Calculate current and proposed tax bills
   * 4. Calculate the difference (impact) for various time periods
   * 5. Format all values as currency strings for display
   */
  useEffect(() => {
    const currentOverride = overrideValue ?? 0;

    // Step 1: Calculate the tax rate impact using the linear equation
    // y = mx + b where y = tax rate impact (per $1,000), x = override amount
    const rateImpact =
      Math.ceil(
        100 * (RATE_IMPACT_SLOPE * currentOverride + RATE_IMPACT_INTERCEPT),
      ) / 100;

    // Step 2: Calculate the proposed new tax rate (per $1,000 of assessed value)
    // Formula: Current Rate + Rate Impact -- truncated to 2 decimal places
    const proposedNewTaxRate = CURRENT_TAX_RATE + rateImpact;

    // Step 3: Calculate current and proposed tax bills
    // Formula: (Assessed Value / 1000) × Tax Rate
    const currentTaxBill = ((assessedValue ?? 0) / 1_000) * CURRENT_TAX_RATE;
    const newTaxBill = ((assessedValue ?? 0) / 1_000) * proposedNewTaxRate;

    // Step 4: Calculate the tax bill impact for various time periods
    const taxBillImpactYearly = newTaxBill - currentTaxBill;
    const taxBillImpactQuarterly = taxBillImpactYearly / 4;
    const taxBillImpactMonthly = taxBillImpactYearly / 12;
    const taxBillImpactDaily = taxBillImpactYearly / 365;

    // Step 5: Format all values as currency strings and update state
    setCalculatedValues({
      currentTaxRate: formatDollars(CURRENT_TAX_RATE),
      newTaxRate: formatDollars(proposedNewTaxRate),
      newTaxRateImpact: formatDollars(rateImpact),
      currentTaxBillYearly: formatDollars(currentTaxBill),
      newTaxBillYearly: formatDollars(newTaxBill),
      currentTaxBillQuarterly: formatDollars(currentTaxBill / 4),
      newTaxBillQuarterly: formatDollars(newTaxBill / 4),
      estimatedTaxImpactYearly: formatDollars(taxBillImpactYearly),
      estimatedTaxImpactQuarterly: formatDollars(taxBillImpactQuarterly),
      estimatedTaxImpactMonthly: formatDollars(taxBillImpactMonthly),
      estimatedTaxImpactDaily: formatDollars(taxBillImpactDaily),
    });
  }, [assessedValue, overrideValue]);

  /**
   * Handler for when a property is selected from the address dropdown.
   *
   * When a property is selected, updates the selected property state and
   * auto-fills the assessed value and query fields with the property's data.
   *
   * @param property - The selected property, or null if cleared
   */
  const onPropertyChange = useCallback((property: Address | null) => {
    setSelectedProperty(property);
    if (property) {
      setAssessedValue(property.value);
      setQuery(property.address);
    }
  }, []);

  /**
   * Handler for when the address input text changes.
   *
   * Updates the query state and triggers a debounced property search.
   *
   * @param event - The input change event
   */
  const onAddressInputChange = useCallback(
    (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      setQuery(value);
      debouncedFetchSuggestions(value);
    },
    [debouncedFetchSuggestions],
  );

  /**
   * Handler for when the assessed value input changes.
   *
   * @param value - The new assessed value (in dollars), or undefined if cleared
   */
  const onAssessedValueChange = useCallback((value: number | undefined) => {
    setAssessedValue(value);
  }, []);

  /**
   * Handler for when the override amount input changes.
   *
   * @param value - The new override amount (in dollars), or undefined if cleared
   */
  const onOverrideValueChange = useCallback((value: number | undefined) => {
    setOverrideValue(value);
  }, []);

  /**
   * Computes the display value for the address combobox.
   *
   * Returns the selected property's address if one is selected,
   * otherwise returns the current search query text.
   *
   * @param property - The currently selected property, or null
   * @returns The text to display in the combobox input
   */
  const getDisplayValue = useCallback(
    (property: Address | null) => property?.address ?? query,
    [query],
  );

  return {
    isLoading,
    suggestions,
    selectedProperty,
    query,
    assessedValue,
    overrideValue,
    calculatedValues,
    onPropertyChange,
    onAddressInputChange,
    onAssessedValueChange,
    onOverrideValueChange,
    getDisplayValue,
  };
};
