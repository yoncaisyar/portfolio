/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  build: {
    reportCompressedSize: false,
    rollupOptions: {
      onwarn(warning, warn) {
        const msg = String(warning.message ?? '');
        if (msg.includes('Module level directives') && msg.includes('"use client"')) return;
        warn(warning);
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupLocalStorage.ts', './src/setupTests.ts'],
    css: { modules: { classNameStrategy: 'non-scoped' } },
  },
});
