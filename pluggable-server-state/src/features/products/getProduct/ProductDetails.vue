<script lang="ts">
import { defineComponent, inject } from 'vue';
import Card from 'primevue/card';
import { type IServerState, ServerStateKey } from '@/serverState/interfaces/IServerState';

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
    const serverState = inject<IServerState>(ServerStateKey);
    if (!serverState) {
      throw new Error('🚀 ~ ProductDetails.vue:18 ~ ServerState not provided in main.ts');
    }
    const { product, isLoading, error } = serverState.useGetProduct(props.id);

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
