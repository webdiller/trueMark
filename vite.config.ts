import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
    },
  },
  server: {
    port: 4000,
    strictPort: true,
    hmr: {
      port: 4000
    }
  },
  cacheDir: '.vite',
  clearScreen: false,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [react(), TanStackRouterVite(), tailwindcss()],
})
