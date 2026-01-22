import type { MaybeRef } from 'vue';
import { useGetProductById } from '@/api/generated/client';
import type { GetProductResult } from '../ports/getProductResult';

export const useGetProduct = (id: MaybeRef<number>): GetProductResult => {
  const { data, isLoading, error } = useGetProductById(id);

  return {
    product: data,
    isLoading,
    error,
  };
};
