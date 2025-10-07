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

## Usage

### Installation

```bash
yarn install
yarn build
```

This generates `dist/stoneham-override-calculator.js` and `dist/index.html`.

### Injecting the Calculator

Add the calculator to any HTML page:

```html
<div id="calculator-container"></div>

<script
  src="./stoneham-override-calculator.js"
  async
  defer
  onload="window.stonehamOverrideCalculator.renderCalculator('calculator-container')"
></script>
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

Tax calculations are based on the [Massachusetts Department of Revenue's Division of Local Services Tax Impact Calculator](https://dlsgateway.dor.state.ma.us/reports/rdPage.aspx?rdReport=Analysis.TaxImpactCalc) for Stoneham (FY2025). Property assessments are sourced from public records via the [Stoneham Patriot Properties website](https://stoneham.patriotproperties.com/default.asp).

**Disclaimer**: This calculator is for demonstration purposes only. Actual tax impact may vary based on final override amount, assessed property values, and other adjustments to the tax levy. Not approved or endorsed by any official entity.
