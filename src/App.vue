<script lang="ts">
import { defineComponent } from 'vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import ProductList from './features/products/GetProducts/ProductList.vue';

export default defineComponent({
  name: 'App',
  components: { VueQueryDevtools, ProductList },
  setup() {

  },
})
</script>

<template>
  <ProductList />
  <VueQueryDevtools />
</template>