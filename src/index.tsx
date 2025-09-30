import { render } from "preact";
import { Calculator } from "./calculator";

export const renderCalculator = (targetElementId: string) => {
  render(<Calculator />, document.getElementById(targetElementId)!);
};

(window as any).stonehamOverrideCalculator = {
  renderCalculator,
};
