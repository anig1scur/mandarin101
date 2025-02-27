import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";
import tsPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === '1' ? '/mandarin101/' : '/',
  server: {
    https: true,
    port: 5173,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
  },
  plugins: [
    react(),
    mkcert({
      source: "coding",
    }),
    tsPaths(),
  ],
  build: {
    cssMinify: "lightningcss",
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
