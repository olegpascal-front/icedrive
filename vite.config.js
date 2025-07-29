import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import gltf from 'vite-plugin-gltf';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [
    react(),
    gltf(),
    glsl()
  ],
  optimizeDeps: {
    exclude: ['@rollup/rollup-linux-x64-gnu']
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1600
  }
});