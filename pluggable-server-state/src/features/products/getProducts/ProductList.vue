<script lang="ts">
import { defineComponent, inject, ref, watch } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import type { Product } from '@/api/generated/models';
import { type IServerState, ServerStateKey } from '@/serverState/interfaces/IServerState';

export default defineComponent({
  name: 'ProductList',
  emits: ['product-selected'],
  components: { DataTable, Column },
  setup(_, { emit }) {
    const serverState = inject<IServerState>(ServerStateKey);
    if (!serverState) {
      throw new Error('🚀 ~ ProductList.vue:16 ~ ServerState not provided in main.ts');
    }
    const { products, error, isLoading } = serverState.useGetProducts();
    const selectedProduct = ref<Product | null>(null);

    watch(selectedProduct, (newProduct) => {
      if (newProduct && newProduct.id) {
        emit('product-selected', newProduct.id);
      } else {
        emit('product-selected', null);
      }
    });

    return {
      products,
      error,
      isLoading,
      selectedProduct,
    };
  },
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">An error has occurred: {{ error }}</div>
  <DataTable
    v-else-if="products"
    v-model:selection="selectedProduct"
    :value="products"
    dataKey="id"
    tableStyle="min-width: 50rem"
  >
    <Column selectionMode="single" headerStyle="width: 3rem"></Column>
    <Column field="id" header="id"></Column>
    <Column field="title" header="title"></Column>
  </DataTable>
</template>
