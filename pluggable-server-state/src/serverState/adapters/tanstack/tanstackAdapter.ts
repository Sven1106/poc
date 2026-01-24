import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { type DefineComponent } from 'vue';
import { ProductsResourceAdapter } from '@/serverState/adapters/tanstack/productsResourceAdapter';
import type { ServerState } from '@/serverState';

export const TanstackAdapter: ServerState = {
  plugin: {
    install(app) {
      app.use(VueQueryPlugin);
    },
  },
  devtools: VueQueryDevtools as DefineComponent,
  productsResource: ProductsResourceAdapter,
};
