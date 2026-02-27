/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'i18next', 'react-i18next'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
    reportCompressedSize: false,
    commonjsOptions: {
      include: [/node_modules/],
      namedExports: {
        react: [
          'Children', 'Component', 'Fragment', 'Profiler', 'PureComponent',
          'StrictMode', 'Suspense', 'cloneElement', 'createContext',
          'createElement', 'createRef', 'forwardRef', 'isValidElement',
          'lazy', 'memo', 'startTransition', 'use', 'useActionState',
          'useCallback', 'useContext', 'useDebugValue', 'useDeferredValue',
          'useEffect', 'useId', 'useImperativeHandle', 'useInsertionEffect',
          'useLayoutEffect', 'useMemo', 'useOptimistic', 'useReducer',
          'useRef', 'useState', 'useSyncExternalStore', 'useTransition',
          'version', 'cache',
        ],
        'react-dom': [
          'createPortal', 'findDOMNode', 'flushSync', 'hydrate', 'render',
          'unmountComponentAtNode', 'unstable_batchedUpdates',
        ],
        'react-dom/client': ['createRoot', 'hydrateRoot'],
      },
    },
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
