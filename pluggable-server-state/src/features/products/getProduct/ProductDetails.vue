<script lang="ts">
import { defineComponent } from 'vue';
import Card from 'primevue/card';
import { useGetProductById } from '@/api/generated/client';
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
    const { data, isLoading, error } = useGetProductById(props.id);

    return {
      data,
      isLoading,
      error,
    };
  },
});
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">An error has occurred: {{ error }}</div>

  <Card v-else-if="data" style="width: 25rem; overflow: hidden">
    <template #title>{{ data.title }}</template>
    <template #content>
      <p class="m-0">
        {{ data.description }}
      </p>
    </template>
    <template #footer>
      <slot></slot>
    </template>
  </Card>
  <div v-else>nothing was loaded</div>
</template>
