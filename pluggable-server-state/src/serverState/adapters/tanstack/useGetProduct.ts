import { computed, type MaybeRef } from 'vue';
import { useGetProductById } from '@/api/generated/client';
import type { GetProductResult } from '@/serverState/interfaces/getProductResult';

export const useGetProduct = (id: MaybeRef<number>): GetProductResult => {
  const { data, isLoading, error } = useGetProductById(id);

  return {
    product: computed(() => data.value),
    isLoading,
    error,
  };
};
