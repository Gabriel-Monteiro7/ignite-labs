import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

// https://vitejs.dev/config/
//{mode}
export default defineConfig(() => ({
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, '/src') }]
  },
  plugins: [react()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
}))
