import type { App, DefineComponent, InjectionKey } from 'vue';
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
