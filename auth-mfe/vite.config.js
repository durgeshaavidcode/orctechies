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
        './LoginCard': './src/components/LoginCard.jsx',
      },
      shared: ['react', 'react-dom'],
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