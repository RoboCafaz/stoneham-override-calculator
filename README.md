# Stoneham Override Calculator

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-blue)](https://robocafaz.github.io/stoneham-override-calculator/)

A property tax override calculator for the town of Stoneham, MA. This calculator helps residents estimate the impact of proposed Proposition 2½ overrides on their property tax bills.

## What It Does

The calculator computes:

- **Tax Rate Impact**: Current vs. proposed tax rates per $1,000 of assessed value
- **Tax Bill Estimates**: Annual and quarterly tax bills under current and proposed rates
- **Personal Tax Impact**: Annual, quarterly, monthly, and daily tax increase for your specific property

Users can either:

- Search for their property address to auto-populate the assessed value
- Manually enter their assessed property value
- Adjust the hypothetical override amount to model different scenarios

### Methodology

This calculator is based on the **Massachusetts Department of Revenue's Division of Local Services Tax Impact Calculator methodology** for Stoneham (FY2025), but uses **linear regression** to project tax impacts rather than performing a full levy calculation.

#### Data Foundation

The calculator uses 8 data points provided by the Massachusetts DOR Division of Local Services that show the relationship between override amounts and their impact on tax rates:

| Override Amount | Tax Rate Impact (per $1,000) |
| --------------- | ---------------------------- |
| $1,000,000      | $0.15                        |
| $5,000,000      | $0.75                        |
| $7,500,000      | $1.13                        |
| $10,000,000     | $1.51                        |
| $14,600,000     | $2.20                        |
| $20,000,000     | $3.02                        |
| $25,000,000     | $3.77                        |
| $50,000,000     | $7.55                        |

#### Linear Regression Model

Using linear regression on these official DOR data points yields a near-perfect linear relationship (R² = 0.9999991):

**y = 0.00000015103764965009x - 0.00288889605331910104**

Where:

- **y** = tax rate impact (dollars per $1,000 of assessed value)
- **x** = override amount (dollars)

The calculator uses the CEIL function on the tax rate impact (rounded up to the nearest cent per $1,000) to take a **conservative approach** that slightly overestimates tax increases rather than underestimating them.

#### Tax Impact Calculation Process

1. **Calculate Tax Rate Impact**: Apply the linear equation to determine the rate increase per $1,000 of assessed value, then round up to the nearest cent (CEIL function) for a conservative estimate
2. **Calculate New Tax Rate**: Add the rate impact to the current tax rate ($10.23 per $1,000 for Stoneham FY2025)
3. **Calculate Tax Bills**: Apply both current and proposed rates to the property's assessed value
4. **Calculate Personal Impact**: Determine the difference across multiple time periods (annual, quarterly, monthly, daily)

#### Important Disclaimers

**Estimation Method**: This calculator uses linear regression to project tax impacts rather than the full levy calculation methodology used by the DOR. While based on official DOR data, **estimates may be slightly different** from official calculations due to:

- Rounding differences in the linear regression model
- Conservative CEIL rounding applied to tax rate impact (rounded up to nearest cent)
- Simplified calculation approach vs. full municipal levy calculations

**Official Use**: This calculator is for **demonstration and estimation purposes only**. Actual tax impacts may vary based on final override amounts, assessed property values, and other adjustments to the tax levy. This tool is not approved or endorsed by the town of Stoneham, the Massachusetts Department of Revenue, or any other official entity.

For complete technical details, see the comments in [src/use-calculator.ts](./src/use-calculator.ts).

## Usage

### Installation

```bash
yarn install
yarn build
```

This generates both minified and non-minified versions:

- `dist/stoneham-override-calculator.min.js` (minified for production)
- `dist/stoneham-override-calculator.js` (non-minified for debugging)
- `dist/index.html` (example page using the minified version)

### Injecting the Calculator

Add the calculator to any HTML page:

```html
<div id="calculator-container"></div>

<!-- Use the minified version for production -->
<script
  src="./stoneham-override-calculator.min.js"
  async
  defer
  onload="window.stonehamOverrideCalculator.renderCalculator('calculator-container')"
></script>

<!-- Or use the non-minified version for debugging -->
<!-- 
<script
  src="./stoneham-override-calculator.js"
  async
  defer
  onload="window.stonehamOverrideCalculator.renderCalculator('calculator-container')"
></script>
-->
```

The `renderCalculator` function accepts the ID of the container element where the calculator should be rendered.

**Key points:**

- Use `async` and `defer` attributes for optimal loading performance
- The `onload` handler ensures the calculator renders only after the script loads
- The container element can be any valid HTML element with a unique ID

See `example/index.html` for a complete working example.

## Styling

The calculator is fully customizable via CSS. All elements are scoped under the `#stoneham-override-calculator` ID to prevent style conflicts.

### CSS

All calculator elements use BEM-style class names and can be scoped to the root id `#stoneham-override-calculator`:

- `.calculator` - Root container
- `.calculator__heading` - Section headings
- `.calculator__input` - Input fields
- `.calculator__label` - Form labels
- `.calculator__data-item` - Result display boxes
- `.calculator__term` - Result labels
- `.calculator__detail` - Result values
- `.calculator__combobox-option` - Address dropdown items

See `example/style.css` for a complete styling reference and `src/calculator.tsx` for the full component structure.

## Development

### Scripts

- `yarn build` - Build the calculator bundle
- `yarn start` - Build and serve on http://localhost:3000
- `yarn format` - Format code with Prettier
- `yarn type-check` - Run TypeScript type checking
- `yarn test` - Run tests

### Methodology

**Tax Calculation Approach**: This calculator is based on the [Massachusetts Department of Revenue's Division of Local Services Tax Impact Calculator](https://dlsgateway.dor.state.ma.us/reports/rdPage.aspx?rdReport=Analysis.TaxImpactCalc) methodology for Stoneham (FY2025), but uses linear regression to project tax impacts rather than performing full levy calculations. Property assessments are sourced from public records via the [Stoneham Patriot Properties website](https://stoneham.patriotproperties.com/default.asp).

**Disclaimer**: This calculator is for demonstration purposes only. Estimates may be slightly different from official DOR calculations due to the linear regression approach and rounding differences. Actual tax impact may vary based on final override amount, assessed property values, and other adjustments to the tax levy. Not approved or endorsed by any official entity.
