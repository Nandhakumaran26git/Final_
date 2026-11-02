import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // In development, serve at root '/' so localhost:5173 works seamlessly.
  // In production (GitHub Pages build), serve with repository base path '/Nourishnetproject/'.
  base: mode === 'production' ? '/Nourishnetproject/' : '/',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
}));