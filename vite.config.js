import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // GitHub Pages alt dizinde çalışması için (yoncaisyar.github.io/REPO_ADI/)
  plugins: [react()],
  optimizeDeps: {
    include: ['i18next', 'react-i18next']
  },
  build: {
    commonjsOptions: {
      include: [/i18next/, /react-i18next/, /node_modules/]
    }
  }
})