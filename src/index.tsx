import { render } from "preact";
import { Calculator } from "./calculator";

/**
 * Renders the Stoneham Override Calculator into the specified DOM element.
 *
 * This function is exposed on the global `window.stonehamOverrideCalculator` object
 *   and can be called after the script loads.
 *
 * @param targetElementId - The ID of the HTML element where the calculator should be rendered
 */
export const renderCalculator = (targetElementId: string) => {
  render(<Calculator />, document.getElementById(targetElementId)!);
};

// Expose the renderCalculator function on the global window object
(window as any).stonehamOverrideCalculator = {
  renderCalculator,
};
