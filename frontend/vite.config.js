import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In Docker, use the backend service name; locally, use localhost
const apiUrl = process.env.VITE_API_PROXY || 'http://localhost:5000';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: apiUrl,
        changeOrigin: true,
      },
    },
  },
});
