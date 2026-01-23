import {
  useDeleteProduct as useDeleteProductMutation,
  invalidateGetAllProducts,
} from '@/api/generated/client';
import type { DeleteProductResult } from '@/serverState/interfaces/deleteProductResult';
import type { DeleteProductOptions } from '@/serverState/interfaces/deleteProductOptions';

export const useDeleteProduct = (options?: DeleteProductOptions): DeleteProductResult => {
  const { mutate, error } = useDeleteProductMutation({
    mutation: {
      onSuccess: (_, { id }, __, { client }) => {
        invalidateGetAllProducts(client);
        options?.onSuccess?.(id);
      },
    },
  });

  return {
    deleteProduct: (id: number) => mutate({ id }),
    error,
  };
};
