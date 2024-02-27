import { defineConfig } from "vite";
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      pages: "/src/pages",
      utils: "/src/shared/utils",
      components: "/src/shared/components",
    },
  },
});
