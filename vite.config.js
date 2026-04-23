import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js
export default defineConfig({
  base: '/579-vanilla/', // Change this to your repository name
  plugins: [react()],
})
