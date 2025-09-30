import { build } from "esbuild";
import { cpSync } from "fs";

// Browser build
await build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ["es2020", "chrome58", "firefox57", "safari11"],
  platform: "browser",
  format: "iife",
  globalName: "stonehamOverrideCalculator",
  outfile: "dist/stoneham-override-calculator.js",
  jsx: "automatic",
  jsxImportSource: "preact",
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
});

// Copy example files to dist
cpSync("example", "dist", { recursive: true });

console.log("✓ Build completed successfully");
