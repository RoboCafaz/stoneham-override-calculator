"use client";

import { useEffect, useState, useCallback } from "preact/hooks";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { NumericFormat } from "react-number-format";
import Fuse from "fuse.js";
import PROPERTIES from "./properties.json";

/** The default value to populate the "Override" field with. */
const DEFAULT_OVERRIDE_AMOUNT = 5_000_000;
/** The default value to populate the "Assessed" field with. */
const DEFAULT_ASSESSED_VALUE = 765_770;
/** The current tax rate for the town multiplied by 100 (e.g. 10.23% should be 1023) */
const CURRENT_TAX_RATE = 1_023;
/** The ratio used to calculate the tax rate impact of the override amount. */
const OVERRIDE_TAX_RATE_RATIO = 150_685;

/** Format a number as a dollar amount. */
const formatDollars = (val: number) => {
  return Number(val / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

/** Fuse.js instance for searching properties. */
const fuse = new Fuse(PROPERTIES, {
  keys: ["#"],
  threshold: 0.2,
});

interface Address {
  /** The address of the property. */
  address: string;
  /** The assessed property value */
  value: number;
}

export const Calculator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Address[]>([]);

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
  const [calculatedValues, setCalculatedValues] = useState({
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

  useEffect(() => {
    const proposedNewTaxRate =
      CURRENT_TAX_RATE +
      ((overrideValue ?? 0) * OVERRIDE_TAX_RATE_RATIO) / 10_000_000_000;
    const taxImpact = proposedNewTaxRate - CURRENT_TAX_RATE;
    const currentTaxBill = ((assessedValue ?? 0) / 1000) * CURRENT_TAX_RATE;
    const newTaxBill = ((assessedValue ?? 0) / 1000) * proposedNewTaxRate;
    const taxBillImpactYearly = newTaxBill - currentTaxBill;
    const taxBillImpactQuarterly = taxBillImpactYearly / 4;
    const taxBillImpactMonthly = taxBillImpactYearly / 12;
    const taxBillImpactDaily = taxBillImpactYearly / 365;

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
  }, [assessedValue, overrideValue, selectedProperty]);

  return (
    <article id="stoneham-override-calculator" className="calculator">
      <section className="calculator__inputs">
        <h2 className="calculator__heading">Calculator Inputs</h2>
        <form className="calculator__form">
          <fieldset className="calculator__fieldset">
            <div className="calculator__field">
              <label htmlFor="propertyAddress" className="calculator__label">
                Your Property Address
              </label>
              <Combobox
                value={selectedProperty}
                onChange={(property) => {
                  setSelectedProperty(property);
                  if (property) {
                    setAssessedValue(property.value);
                    setQuery(property.address);
                  }
                }}
              >
                <div className="calculator__combobox">
                  <ComboboxInput
                    id="propertyAddress"
                    className="calculator__input calculator__input--combobox"
                    placeholder="Enter your property address"
                    displayValue={(
                      property: { address: string; value: number } | null,
                    ) => property?.address ?? query}
                    onChange={(event) => {
                      const value = (event.target as HTMLInputElement).value;
                      setQuery(value);
                      debouncedFetchSuggestions(value);
                    }}
                  />
                  <ComboboxOptions className="calculator__combobox-options">
                    {isLoading ? (
                      <div className="calculator__combobox-message">
                        Loading...
                      </div>
                    ) : suggestions.length === 0 && query.length > 2 ? (
                      <div className="calculator__combobox-message">
                        No properties found
                      </div>
                    ) : (
                      suggestions.map((suggestion, index) => (
                        <ComboboxOption
                          key={index}
                          value={suggestion}
                          className="calculator__combobox-option"
                        >
                          <div className="calculator__combobox-option-address">
                            {suggestion.address}
                          </div>
                          <div className="calculator__combobox-option-value">
                            Assessed Value:{" "}
                            {formatDollars(suggestion.value * 100)}
                          </div>
                        </ComboboxOption>
                      ))
                    )}
                  </ComboboxOptions>
                </div>
              </Combobox>
            </div>

            <div className="calculator__field">
              <label htmlFor="yourValue" className="calculator__label">
                Your Assessed Property Value
              </label>
              <div className="calculator__input-wrapper">
                <span className="calculator__currency-symbol">$</span>
                <NumericFormat
                  id="yourValue"
                  className="calculator__input calculator__input--numeric"
                  name="Your assessment value"
                  type="text"
                  value={assessedValue}
                  onValueChange={(e) => setAssessedValue(e.floatValue)}
                  placeholder={DEFAULT_ASSESSED_VALUE.toLocaleString()}
                  thousandSeparator={true}
                  allowNegative={false}
                  decimalScale={0}
                  max={100_000_000}
                  maxLength={11}
                />
              </div>
            </div>

            <div className="calculator__field">
              <label htmlFor="overrideValue" className="calculator__label">
                Hypothetical Override Amount
              </label>
              <div className="calculator__input-wrapper">
                <span className="calculator__currency-symbol">$</span>
                <NumericFormat
                  id="overrideValue"
                  className="calculator__input calculator__input--numeric"
                  name="New override amount"
                  type="text"
                  value={overrideValue}
                  onValueChange={(e) => setOverrideValue(e.floatValue)}
                  placeholder={DEFAULT_OVERRIDE_AMOUNT.toLocaleString()}
                  thousandSeparator={true}
                  allowNegative={false}
                  decimalScale={0}
                  max={14_600_000}
                  maxLength={10}
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>

      <section className="calculator__results calculator__results--tax-rate">
        <h2 className="calculator__heading">Estimated Tax Rate Impact</h2>
        <dl className="calculator__data-list">
          <div className="calculator__data-item">
            <dt className="calculator__term">Current Tax Rate</dt>
            <dd className="calculator__detail calculator__detail--unit">
              (per $1,000)
            </dd>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.currentTaxRate}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Proposed Tax Rate</dt>
            <dd className="calculator__detail calculator__detail--unit">
              (per $1,000)
            </dd>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.newTaxRate}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Rate Increase</dt>
            <dd className="calculator__detail calculator__detail--unit">
              (per $1,000)
            </dd>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.newTaxRateImpact}
            </dd>
          </div>
        </dl>
      </section>

      <section className="calculator__results calculator__results--tax-bill">
        <h2 className="calculator__heading">Your Estimated Tax Bill</h2>
        <dl className="calculator__data-list">
          <div className="calculator__data-item">
            <dt className="calculator__term">Current Annual Bill</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.currentTaxBillYearly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Proposed Annual Bill</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.newTaxBillYearly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Current Quarterly Bill</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.currentTaxBillQuarterly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Proposed Quarterly Bill</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.newTaxBillQuarterly}
            </dd>
          </div>
        </dl>
      </section>

      <section className="calculator__results calculator__results--tax-impact">
        <h2 className="calculator__heading">Your Estimated Tax Impact</h2>
        <dl className="calculator__data-list">
          <div className="calculator__data-item">
            <dt className="calculator__term">Annual Impact:</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.estimatedTaxImpactYearly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Quarterly Impact:</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.estimatedTaxImpactQuarterly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Monthly Impact:</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.estimatedTaxImpactMonthly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Daily Impact:</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculatedValues.estimatedTaxImpactDaily}
            </dd>
          </div>
        </dl>
      </section>

      <footer className="calculator__footer">
        <p className="calculator__disclaimer">
          Methodology derived from{" "}
          <a
            href="https://dlsgateway.dor.state.ma.us/reports/rdPage.aspx?rdReport=Analysis.TaxImpactCalc"
            className="calculator__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            the Massachusetts Department of Revenue's Division of Local Services
            Tax Impact Calculator
          </a>{" "}
          for the town of Stoneham (FY2025). Property assessments pulled from
          public record via{" "}
          <a
            href="https://stoneham.patriotproperties.com/default.asp"
            className="calculator__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            the Stoneham Patriot Properties website
          </a>
          . For demonstration purposes only. Actual tax impact may vary based on
          final override amount, assessed property values, and other adjustments
          to the tax levy. This calculator is not approved nor endorsed by the
          town of Stoneham, the Massachusetts Department of Revenue, Patriot
          Properties, nor any other official entity. Source code available via{" "}
          <a
            href="https://github.com/RoboCafaz/stoneham-override-calculator"
            className="calculator__link"
            target="_blank"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </article>
  );
};
