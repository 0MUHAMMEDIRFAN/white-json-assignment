import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/white-json/",
  plugins: [react()],
  server: {
    hmr:false,
    port: 3000,
  },
})
