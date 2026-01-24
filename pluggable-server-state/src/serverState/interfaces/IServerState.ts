import { defineComponent, h, inject, type App, type DefineComponent, type InjectionKey } from 'vue';
import type { DeleteProductOptions } from './deleteProductOptions';
import type { DeleteProductResult } from './deleteProductResult';
import type { GetProductResult } from './getProductResult';
import type { GetProductsResult } from './getProductsResult';

export interface IServerState {
  plugin: {
    install: (app: App) => void;
  };
  devtools: DefineComponent | {};
  useDeleteProduct: (options?: DeleteProductOptions) => DeleteProductResult;
  useGetProduct: (id: number) => GetProductResult;
  useGetProducts: () => GetProductsResult;
}

export const ServerStateKey: InjectionKey<IServerState> = Symbol('ServerState');

export const ServerStateDevtools = defineComponent({
  name: 'ServerStateDevtools',
  setup() {
    const serverState = inject<IServerState>(ServerStateKey);
    if (!serverState) {
      throw new Error('ServerState not provided in main.ts');
    }
    return () => h(serverState.devtools as DefineComponent);
  },
});
