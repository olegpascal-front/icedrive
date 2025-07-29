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
  server: {
    host: true, // Разрешаем доступ со всех сетей
    port: 3000,
    strictPort: true,
    hmr: {
      clientPort: 443 // Для работы через мобильные сети
    }
  },
  preview: {
    host: true,
    port: 3000,
    strictPort: true
  },
  optimizeDeps: {
    exclude: ['@rollup/rollup-linux-x64-gnu'],
    include: [
      '@pbe/react-yandex-maps',
      'react',
      'react-dom'
    ]
  },
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 1600,
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
});