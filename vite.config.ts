/// <reference types="vitest" />
/// <reference types="vite/client" />


import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    css: true,
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: fileURLToPath(new URL('./src', import.meta.url))

      }
    ]
  }
})
