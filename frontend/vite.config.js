import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your backend server
        changeOrigin: true, // Needed for CORS
        rewrite: (path) => path.replace(/^\/api/, '') // Removes '/api' from the path when forwarding to backend
      }
    }
  },
  plugins: [react()]
})

