import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: BASE_PATH=/kitapcenneti/
// Cloudflare Pages / local: BASE_PATH=/
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8788',
        changeOrigin: true,
      },
    },
  },
})
