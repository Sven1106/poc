import { computed } from 'vue';
import { useGetAllProducts } from '@/api/generated/client';
import type { GetProductsResult } from '@/serverState/interfaces/getProductsResult';

export const useGetProducts = (): GetProductsResult => {
  const { data, isLoading, error } = useGetAllProducts();

  return {
    products: computed(() => data.value),
    isLoading,
    error,
  };
};
