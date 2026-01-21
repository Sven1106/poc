import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { type DefineComponent } from 'vue';
import type { ServerStatePort } from '../index';

export const ServerStateAdapter: ServerStatePort = {
  plugin: {
    install(app) {
      app.use(VueQueryPlugin);
    },
  },
  devtools: VueQueryDevtools as DefineComponent,
};
