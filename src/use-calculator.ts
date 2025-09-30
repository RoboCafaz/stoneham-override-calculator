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
 * New Tax Rate = Current Tax Rate + (Override Amount × Override Ratio / 10,000,000,000)
 * ```
 *
 * Where:
 * - **Current Tax Rate**: The current tax rate per $1,000 of assessed value (in cents)
 * - **Override Amount**: The proposed override amount in dollars
 * - **Override Ratio**: A town-specific ratio derived from the residential tax rate impact
 *   per dollar of override, based on empirical data from MA DOR calculations
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
 * The current tax rate for Stoneham, MA (FY2025) multiplied by 100.
 * Stored as cents to avoid floating-point precision issues.
 *
 * @example
 * A rate of $10.23 per $1,000 is stored as 1023
 */
export const CURRENT_TAX_RATE = 1_023;

/**
 * The override tax rate ratio for Stoneham, MA (FY2025).
 * This ratio is used to calculate the residential (RO) tax rate increase per dollar of override.
 *
 * @remarks
 * This ratio was derived empirically from Massachusetts DOR Division of Local Services
 * tax impact calculations for a $14.6M Proposition 2½ override in Stoneham FY2025:
 *
 * - Override Amount: $14,600,000
 * - Residential Tax Rate Impact: $2.20 per $1,000
 * - RO Assessed Value: $5,540,472,703
 * - RO Levy Increase: $12,211,025 (83.6372% of total)
 *
 * Calculation:
 * ```
 * Override Ratio = (Tax Rate Impact × 10,000,000,000) / Override Amount
 * Override Ratio = (2.20 × 10,000,000,000) / 14,600,000
 * Override Ratio ≈ 1,506.85
 * ```
 * Stored as integer (scaled by 100): **150,685**
 *
 * **Why 10,000,000,000?**
 * The 10 billion scaling factor is used to store the ratio as an integer, avoiding
 * floating-point precision issues. Without it, the ratio would be 0.000150685
 * (rate impact per dollar of override). Multiplying by 10 billion produces a
 * manageable integer in the 100,000-200,000 range that can be stored precisely.
 *
 * This ratio remains relatively constant across different override amounts because
 * the relationship between override levy and tax rate impact is linear based on
 * the total residential assessed value.
 */
export const OVERRIDE_TAX_RATE_RATIO = 150_685;

/**
 * Format a number as a dollar amount.
 *
 * Converts a value stored in cents to a formatted USD string.
 * Using cents internally avoids floating-point precision issues in calculations.
 *
 * @param val - The value to format (in cents)
 * @returns A formatted dollar string (e.g., "$10.23")
 *
 * @example
 * ```typescript
 * formatDollars(1023) // Returns "$10.23"
 * formatDollars(500000) // Returns "$5,000.00"
 * ```
 */
export const formatDollars = (val: number) => {
  return Number(val / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

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
   * 1. Calculate the new tax rate using the override formula
   * 2. Calculate current and proposed tax bills
   * 3. Calculate the difference (impact) for various time periods
   * 4. Format all values as currency strings for display
   *
   * @remarks
   * All monetary values are kept in cents during calculation to avoid floating-point
   * precision issues, then converted to dollars for display using formatDollars().
   */
  useEffect(() => {
    // Step 1: Calculate the proposed new tax rate
    // Formula: Current Rate + (Override Amount × Override Ratio / 10,000,000,000)
    // The division by 10 billion reverses the scaling factor used in OVERRIDE_TAX_RATE_RATIO
    // to get the actual rate impact in cents per $1,000 of assessed value
    const proposedNewTaxRate =
      CURRENT_TAX_RATE +
      ((overrideValue ?? 0) * OVERRIDE_TAX_RATE_RATIO) / 10_000_000_000;

    // Step 2: Calculate the tax rate increase
    const taxImpact = proposedNewTaxRate - CURRENT_TAX_RATE;

    // Step 3: Calculate current and new tax bills
    // Formula: (Assessed Value / 1000) × Tax Rate
    const currentTaxBill = ((assessedValue ?? 0) / 1000) * CURRENT_TAX_RATE;
    const newTaxBill = ((assessedValue ?? 0) / 1000) * proposedNewTaxRate;

    // Step 4: Calculate the tax bill impact for various time periods
    const taxBillImpactYearly = newTaxBill - currentTaxBill;
    const taxBillImpactQuarterly = taxBillImpactYearly / 4;
    const taxBillImpactMonthly = taxBillImpactYearly / 12;
    const taxBillImpactDaily = taxBillImpactYearly / 365;

    // Step 5: Format all values as currency strings and update state
    setCalculatedValues({
      currentTaxRate: formatDollars(CURRENT_TAX_RATE),
      newTaxRate: formatDollars(proposedNewTaxRate),
      newTaxRateImpact: formatDollars(taxImpact),
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
