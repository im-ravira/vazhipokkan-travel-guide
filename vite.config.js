import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Set the output directory
    rollupOptions: {
      // You can add Rollup options here if needed
    }
  },
  server: {
    port: 7000,
    open: true,
  }
})
