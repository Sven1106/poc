import { computed } from 'vue';
import { useGetAllProducts } from '@/api/generated/client';
import type { GetProductsResult } from '../ports/getProductsResult';

export const useGetProducts = (): GetProductsResult => {
  const { isLoading, data, error } = useGetAllProducts();

  return {
    products: computed(() => data.value),
    isLoading,
    error,
  };
};
