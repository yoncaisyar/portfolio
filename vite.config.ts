/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const IGNORED_ERRORS = new Set(['ETIMEDOUT', 'ECONNRESET', 'EPIPE', 'ECONNABORTED']);

function previewSocketErrorHandler(): Plugin {
  return {
    name: 'preview-socket-error-handler',
    configurePreviewServer(server) {
      server.httpServer.on('connection', (socket) => {
        socket.on('error', (err: NodeJS.ErrnoException) => {
          if (IGNORED_ERRORS.has(err.code ?? '')) return;
          console.error('[preview] socket error:', err.message);
        });
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), previewSocketErrorHandler()],
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
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-swiper': ['swiper'],
          'vendor-i18n':   ['i18next', 'react-i18next'],
        },
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
