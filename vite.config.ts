import { defineConfig } from 'laravel-vite';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: 'resources/scripts/main.ts',
    },
  },
  server: {
    open: true,
    https: true,
    cors: true,
    hmr: {
      host: 'localhost',
    },
  },
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  resolve: {
    alias: [
      { find: '~', replacement: './resources' },
      { find: '@css', replacement: './resources/css' },
      { find: '@scss', replacement: './resources/scss' },
      { find: 'js', replacement: './resources/js' },
      { find: '@images', replacement: './resources/images' },
      { find: '@scripts', replacement: './resources/scripts' },
      { find: '@components', replacement: './resources/views/components' },
      { find: 'ziggy', replacement: path.resolve('vendor/tightenco/ziggy/src/js') },
    ],
  },
  optimizeDeps: {
    include: ['@inertiajs/inertia', '@inertiajs/inertia-vue3'],
  },
});
