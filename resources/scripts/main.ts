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
import { App, plugin } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
// @ts-ignore
import route from 'ziggy';
// @ts-ignore
import { Ziggy } from '../js/ziggy';
import 'vite/dynamic-import-polyfill';

InertiaProgress.init();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const el = document.getElementById('app')!;

// ziggy -> route
const ziggyRoute = {
  methods: {
    route: (name: unknown, params: unknown, absolute: unknown, config = Ziggy) => route(name, params, absolute, config),
  },
};

createApp({
  mixins: [ziggyRoute],
  render: () => h(App, {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    initialPage: JSON.parse(el.dataset.page!),
    resolveComponent: async (name: string) => {
      const page = await import(`../views/Pages/${name}.vue`);
      return page.default;
    },
  }),
}).use(plugin).mount(el);
