import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/team-vaayushastra-2025/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:5000",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild", // Use esbuild instead of terser
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    // Handle large assets like 3D models
    chunkSizeWarningLimit: 2000,
    assetsInlineLimit: 0, // Don't inline large assets
  },
  assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.bin"], // Include 3D model files
});
