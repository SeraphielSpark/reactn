import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/reactn/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [react()],
})
