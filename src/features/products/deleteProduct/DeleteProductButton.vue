<script lang="ts">
import { defineComponent } from 'vue';
import { useDeleteProduct, invalidateGetAllProducts } from '@/api/generated/client';
import Button from 'primevue/button';
export default defineComponent({
  name: 'DeleteProductButton',
  emits: ['deleted'],
  components: { Button },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(_, { emit }) {
    const { mutate, error, isPending } = useDeleteProduct({
      mutation: {
        onSuccess: (_, { id }, __, { client }) => {
          invalidateGetAllProducts(client);
          emit('deleted', id);
        },
      },
    });

    return { mutate, error, isPending };
  },
});
</script>

<template>
  <Button label="Delete Product" severity="danger" @click="mutate({ id })" />
</template>
