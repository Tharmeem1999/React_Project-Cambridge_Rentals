import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
})
