<script lang="ts">
import { defineComponent } from 'vue';
import Card from 'primevue/card';
import { useProductsResource } from '@/serverState';
export default defineComponent({
  name: 'ProductDetails',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: { Card },
  setup(props) {
    const { product, isLoading, error } = useProductsResource().get(props.id);

    return {
      product,
      isLoading,
      error,
    };
  },
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">An error has occurred: {{ error }}</div>

  <Card v-else-if="product" style="width: 25rem; overflow: hidden">
    <template #title>{{ product.title }}</template>
    <template #content>
      <p class="m-0">
        {{ product.description }}
      </p>
    </template>
    <template #footer>
      <slot></slot>
    </template>
  </Card>
  <div v-else>nothing was loaded</div>
</template>
