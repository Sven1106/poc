import type { Ref } from 'vue';

export type DeleteProductResult = {
  deleteProduct: (id: number) => void;
  error: Ref<unknown | null>;
};
