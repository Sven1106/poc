<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useGetAllProducts } from '@/api/generated/client';
import type { Product } from '@/api/generated/models';

export default defineComponent({
  name: 'ProductList',
  emits: ['product-selected'],
  setup(_, { emit }) {
    const { data, error, isFetching, isPending } = useGetAllProducts();
    const selectedProduct = ref<Product | null>(null);

    watch(selectedProduct, (newProduct) => {
      if (newProduct && newProduct.id) {
        emit('product-selected', newProduct.id);
      } else {
        emit('product-selected', null);
      }
    });

    return {
      data,
      error,
      isFetching,
      isPending,
      selectedProduct,
    }
  },
})
</script>

<template>
  <div v-if="isPending"> Loading... </div>
  <div v-else-if="error">
    An error has occurred: {{ error }}
  </div>
  <DataTable v-else-if="data" v-model:selection="selectedProduct" :value="data" dataKey="id"
    tableStyle="min-width: 50rem">
    <Column selectionMode="single" headerStyle="width: 3rem"></Column>
    <Column field="id" header="id"></Column>
    <Column field="title" header="title"></Column>
  </DataTable>

</template>