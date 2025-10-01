import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "microboard-frontend-host",
      remotes: {
        MicroboardFrontendChild: {
          external: "/child/assets/remoteEntry.js",
          externalType: "url",
        },
      },
      shared: ["react", "react-dom"],
    }),
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
