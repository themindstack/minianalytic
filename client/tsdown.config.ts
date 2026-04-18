import { defineConfig } from "tsdown";

export default defineConfig({
  dts: true,
  exports: true,
  sourcemap: true,
  deps: {
    neverBundle: "",
  },
  // ...config options
});
