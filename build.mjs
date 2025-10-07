import { build } from "esbuild";
import { cpSync } from "fs";

// Common build configuration
const commonConfig = {
  entryPoints: ["src/index.tsx"],
  bundle: true,
  sourcemap: true,
  target: ["es2020", "chrome58", "firefox57", "safari11"],
  platform: /** @type {"browser"} */ ("browser"),
  format: /** @type {"iife"} */ ("iife"),
  globalName: "stonehamOverrideCalculator",
  jsx: /** @type {"automatic"} */ ("automatic"),
  jsxImportSource: "preact",
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
};

// Build minified version
await build({
  ...commonConfig,
  minify: true,
  outfile: "dist/stoneham-override-calculator.min.js",
});

// Build non-minified version
await build({
  ...commonConfig,
  minify: false,
  outfile: "dist/stoneham-override-calculator.js",
});

// Copy example files to dist
cpSync("example", "dist", { recursive: true });

console.log("✓ Build completed successfully");
