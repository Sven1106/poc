import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { type DefineComponent } from 'vue';
import type { ServerState } from '@/serverState/interfaces/ServerState';
import { useDeleteProduct } from './useDeleteProduct';
import { useGetProduct } from './useGetProduct';
import { useGetProducts } from './useGetProducts';

export const TanstackAdapter: ServerState = {
  plugin: {
    install(app) {
      app.use(VueQueryPlugin);
    },
  },
  devtools: VueQueryDevtools as DefineComponent,
  useDeleteProduct,
  useGetProduct,
  useGetProducts,
};
