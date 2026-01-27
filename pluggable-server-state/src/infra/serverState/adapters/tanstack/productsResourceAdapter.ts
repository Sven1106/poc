import {
  invalidateGetAllProducts,
  useDeleteProduct,
  useGetAllProducts,
  useGetProductById,
} from '@/api/generated/client';
import type { ProductsResource } from '@/infra/serverState';
import { computed } from 'vue';

export const ProductsResourceAdapter: ProductsResource = {
  list: () => {
    const { data, isLoading, error } = useGetAllProducts();

    return {
      products: computed(() => data.value),
      isLoading,
      error,
    };
  },
  get: (id) => {
    const { data, isLoading, error } = useGetProductById(id);

    return {
      product: computed(() => data.value),
      isLoading,
      error,
    };
  },
  remove: (_, options) => {
    const { mutate, error } = useDeleteProduct({
      mutation: {
        onSuccess: (_, {}, __, { client }) => {
          invalidateGetAllProducts(client);
          options?.onSuccess();
        },
      },
    });

    return {
      deleteProduct: (id) => mutate({ id }),
      error,
    };
  },
};
