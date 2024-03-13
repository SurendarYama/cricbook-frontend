import { defineConfig } from "vite";
export default defineConfig({
  envPrefix: "CRICBOOK_APP",
  plugins: [],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      pages: "/src/pages",
      services: "/src/services",
      utils: "/src/shared/utils",
      components: "/src/shared/components",
    },
  },
});
