import { defineConfig } from "laravel-vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    build: {
        manifest: true,
        rollupOptions: {
            input: "resources/scripts/main.ts",
        },
    },
    server: {
        open: true,
        https: true,
        cors: true,
        hmr: {
            host: "localhost",
        },
    },
    plugins: [vue()],
    optimizeDeps: {
        include: ["@inertiajs/inertia", "@inertiajs/inertia-vue3"],
    },
});
