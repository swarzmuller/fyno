import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxImportSource: "@emotion/react" }), svgr()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },

  server: {
    proxy: {
      "/api": {
        target: "https://shop-for-w-default-rtdb.firebaseio.com", // TODO: take from env
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
