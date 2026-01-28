<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import type { Product } from '@/api/generated/models';
import { useGetAllProducts } from '@/api/generated/client';

export default defineComponent({
  name: 'ProductList',
  emits: ['product-selected'],
  setup(_, { emit }) {
    const { data, isLoading, isError, error } = useGetAllProducts();
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
      isError,
      error,
      isLoading,
      selectedProduct,
    };
  },
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data" dataKey="id">
    <ul>
      <li
        v-for="product in data"
        :key="product.id"
        @click="selectedProduct = product"
        :style="{
          cursor: 'pointer',
          fontWeight: selectedProduct && selectedProduct.id === product.id ? 'bold' : 'normal',
        }"
      >
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>
