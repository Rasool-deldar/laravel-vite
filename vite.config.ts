import { defineConfig } from 'laravel-vite';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';

export default defineConfig({
  build: {
    manifest: true,
    minify: true,
    sourcemap: true,
    rollupOptions: {
      input: resolve(__dirname, './resources/scripts/main.ts'),
    },
  },
  server: {
    open: false,
    https: true,
    cors: true,
    hmr: {
      host: 'localhost',
    },
  },
  resolve: {
    alias: [
      { find: '~', replacement: resolve(__dirname, './resources') },
      { find: '@', replacement: resolve(__dirname, './resources') },
      { find: '@css', replacement: resolve(__dirname, './resources/css') },
      { find: '@scss', replacement: resolve(__dirname, './resources/scss') },
      { find: 'js', replacement: resolve(__dirname, './resources/js') },
      { find: '@images', replacement: resolve(__dirname, './resources/images') },
      { find: '@scripts', replacement: resolve(__dirname, './resources/scripts') },
      { find: '@components', replacement: resolve(__dirname, './resources/views/components') },
      { find: 'ziggy', replacement: resolve('./vendor/tightenco/ziggy/src/js') },
    ],
  },
  plugins: [
    vue(),
    legacy({
      targets: ['defaults'],
      polyfills: true,
      modernPolyfills: true,
      renderLegacyChunks: true,
    }),
  ],
  optimizeDeps: {
    include: ['@inertiajs/inertia', '@inertiajs/inertia-vue3'],
  },
});
