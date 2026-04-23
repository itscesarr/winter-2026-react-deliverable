import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// vite.config.js
export default defineConfig({
  base: '/winter-2026-react-deliverable', // Change this to your repository name
  plugins: [react()],
})
