<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useGetAllProducts } from '@/api/generated/client';
import Button from "primevue/button";

export default defineComponent({
  name: 'App',
  setup() {
    const { data, error, isFetching, isPending } = useGetAllProducts();
    const selectedProduct = ref(null);

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
    selectedProduct: {{ selectedProduct }}  
  <div v-if="isPending"> Loading... </div>
  <div v-else-if="error">
    An error has occurred: {{ error }}
  </div>
  <div v-else>
    <h1>Products</h1>
    <DataTable v-model:selection="selectedProduct" :value="data" dataKey="id" tableStyle="min-width: 50rem">
      <Column selectionMode="single" headerStyle="width: 3rem"></Column>
      <Column field="id" header="id"></Column>
      <Column field="title" header="title"></Column>
    </DataTable>
    <div v-if="isFetching">Updating...</div>
  </div>
</template>