import type { Ref } from 'vue';
import type { Product } from '@/api/generated/models';
export type GetProductsResult = {
  products: Ref<Product[] | undefined>;
  error: Ref<unknown | null>;
  isLoading: Ref<boolean>;
};
