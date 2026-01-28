<script lang="ts">
import { defineComponent } from 'vue';
import { useGetProductById } from '@/api/generated/client';
export default defineComponent({
  name: 'ProductDetails',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { data, isLoading, isError, error } = useGetProductById(props.id);

    return {
      data,
      isLoading,
      isError,
      error,
    };
  },
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">An error has occurred: {{ error }}</div>
  <div v-else-if="data" style="width: 25rem; overflow: hidden">
    <h2>{{ data.title }}</h2>
    <img :src="data.image" :alt="data.title" style="width: 100%; height: auto" />
    <p><strong>Price:</strong> ${{ data.price }}</p>
    <p><strong>Description:</strong> {{ data.description }}</p>
    <slot></slot>
  </div>
  <div v-else>nothing was loaded</div>
</template>
