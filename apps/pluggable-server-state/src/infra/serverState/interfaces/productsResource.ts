import type { Product } from '@/api/generated/models';
import { type Ref } from 'vue';

export interface ProductsResource {
  list: () => {
    products: Ref<Product[] | undefined>;
    error: Ref<unknown | null>;
    isLoading: Ref<boolean>;
  };
  get: (id: number) => {
    product: Ref<Product | undefined>;
    error: Ref<unknown | null>;
    isLoading: Ref<boolean>;
  };
  remove: (
    id: number,
    options?: { onSuccess: () => void },
  ) => {
    deleteProduct: (id: number) => void;
    error: Ref<unknown | null>;
  };
}
