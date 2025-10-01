import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microboard-frontend-child", // A unique name for this MFE
      filename: "remoteEntry.js", // The file that will be loaded by the host
      // Components to expose
      exposes: {
        "./App": "./src/App.tsx",
      },
      // Dependencies to share
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    host: "localhost",
    port: 3001,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
