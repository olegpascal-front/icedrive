import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import gltf from 'vite-plugin-gltf'; // Импортируем плагин для GLTF

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    gltf(), // Добавляем плагин для GLTF
  ],
});