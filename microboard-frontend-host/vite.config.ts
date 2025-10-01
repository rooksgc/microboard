import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microboard-frontend-host",
      // The remotes we want to consume
      remotes: {
        MicroboardChild: {
          external: "http://localhost:4174/assets/remoteEntry.js",
          externalType: "url",
        },
      },
      // Dependencies to share
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    host: "localhost",
    port: 4173,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
