import type { ProductsResource } from '@/infra/serverState/interfaces/productsResource';
import { defineComponent, h, inject, type App, type DefineComponent, type InjectionKey } from 'vue';
/*
register in main.ts like this:
app
.provide(ServerStateKey, TanstackAdapter)
.use(TanstackAdapter.plugin)
*/

export interface ServerState {
  plugin: {
    install: (app: App) => void;
  };
  devtools: DefineComponent | {};
  productsResource: ProductsResource;
}

export const ServerStateKey: InjectionKey<ServerState> = Symbol('ServerState');

export const ServerStateDevtools = defineComponent({
  name: 'ServerStateDevtools',
  setup() {
    const serverState = inject<ServerState>(ServerStateKey);
    if (!serverState) {
      throw new Error('ServerState not provided in main.ts');
    }
    return () => h(serverState.devtools as DefineComponent);
  },
});

export const useProductsResource = () => {
  const serverState = inject<ServerState>(ServerStateKey);
  if (!serverState) {
    throw new Error('ServerState not provided in main.ts');
  }
  return serverState.productsResource;
};
