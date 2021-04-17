import { defineConfig } from 'laravel-vite';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import legacy from '@vitejs/plugin-legacy';

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
  optimizeDeps: {
    include: ['@inertiajs/inertia', '@inertiajs/inertia-vue3'],
  },
});
