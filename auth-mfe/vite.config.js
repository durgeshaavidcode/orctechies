import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  base: 'http://localhost:5001/',
  plugins: [
    react(),
    federation({
      name: 'auth_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './Auth': './src/index.jsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom', '@originjs/vite-plugin-federation'],
    }),
  ],
  server: {
    port: 5001,
    strictPort: true,
    // host: true,
    cors: true // Allow host-app to bypass cross-origin blocks
  },
  preview: {
    port: 5001,
    strictPort: true,
    cors: true
  },
  build: {
    target: 'esnext',
    minify: false,
  }
});