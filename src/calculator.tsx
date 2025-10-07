"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { NumericFormat } from "react-number-format";
import {
  DEFAULT_ASSESSED_VALUE,
  DEFAULT_OVERRIDE_AMOUNT,
  formatDollars,
  useCalculator,
} from "./use-calculator";

/**
 * Calculator component for the Stoneham Override Calculator.
 *
 * Renders a form for inputting property information and displays
 *   calculated tax impact results.
 */
export const Calculator = () => {
  const calculator = useCalculator();

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
                value={calculator.selectedProperty}
                onChange={calculator.onPropertyChange}
              >
                <div className="calculator__combobox">
                  <ComboboxInput
                    id="propertyAddress"
                    className="calculator__input calculator__input--combobox"
                    placeholder="Enter your property address"
                    displayValue={calculator.getDisplayValue}
                    onChange={calculator.onAddressInputChange}
                  />
                  <ComboboxOptions className="calculator__combobox-options">
                    {calculator.isLoading ? (
                      <div className="calculator__combobox-message">
                        Loading...
                      </div>
                    ) : calculator.suggestions.length === 0 &&
                      calculator.query.length > 2 ? (
                      <div className="calculator__combobox-message">
                        No properties found
                      </div>
                    ) : (
                      calculator.suggestions.map((suggestion, index) => (
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
                            {formatDollars(suggestion.value)}
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
                  value={calculator.assessedValue}
                  onValueChange={(e) =>
                    calculator.onAssessedValueChange(e.floatValue)
                  }
                  placeholder={formatDollars(DEFAULT_ASSESSED_VALUE)}
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
                  value={calculator.overrideValue}
                  onValueChange={(e) =>
                    calculator.onOverrideValueChange(e.floatValue)
                  }
                  placeholder={formatDollars(DEFAULT_OVERRIDE_AMOUNT)}
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
              {calculator.calculatedValues.currentTaxRate}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Proposed Tax Rate</dt>
            <dd className="calculator__detail calculator__detail--unit">
              (per $1,000)
            </dd>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.newTaxRate}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Rate Increase</dt>
            <dd className="calculator__detail calculator__detail--unit">
              (per $1,000)
            </dd>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.newTaxRateImpact}
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
              {calculator.calculatedValues.currentTaxBillYearly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Proposed Annual Bill</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.newTaxBillYearly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Current Quarterly Bill</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.currentTaxBillQuarterly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Proposed Quarterly Bill</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.newTaxBillQuarterly}
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
              {calculator.calculatedValues.estimatedTaxImpactYearly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Quarterly Impact:</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.estimatedTaxImpactQuarterly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Monthly Impact:</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.estimatedTaxImpactMonthly}
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Daily Impact:</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.estimatedTaxImpactDaily}
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
