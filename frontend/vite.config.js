import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000', // Backend ka Port
        changeOrigin: true,
        secure: false,
      },
    },
  },
  
});
