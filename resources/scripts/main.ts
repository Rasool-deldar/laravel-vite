/*
|--------------------------------------------------------------------------
| Main entry point
|--------------------------------------------------------------------------
| Files in the "resources/scripts" directory are considered entrypoints
| by default.
|
| -> https://vitejs.dev
| -> https://github.com/innocenzi/laravel-vite
*/

import { createApp, h } from 'vue';
// @ts-ignore
import { App, plugin } from '@inertiajs/inertia-vue3';
import "vite/dynamic-import-polyfill";
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init();

const el = document.getElementById("app")!;

createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page!),
            resolveComponent: async (name: string) => {
                // @ts-ignore
                const page = await import(`../views/Pages/${name}.vue`);
                return page.default;
            },
        }),
}).use(plugin).mount(el);
