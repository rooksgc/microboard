import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    // federation({
    //   name: "microboard-frontend-host",
    //   // The remotes we want to consume
    //   remotes: {
    //     MicroboardFrontendChild: {
    //       external: "http://localhost:3001/assets/remoteEntry.js",
    //       externalType: "url",
    //     },
    //   },
    //   // Dependencies to share
    //   shared: ["react", "react-dom"],
    // }),
  ],
  preview: {
    host: "localhost",
    port: 3000,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
