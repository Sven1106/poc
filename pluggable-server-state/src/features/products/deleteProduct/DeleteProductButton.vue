<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import { useDeleteProduct, invalidateGetAllProducts } from '@/api/generated/client';

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
  setup(props, { emit }) {
    const { mutate, error } = useDeleteProduct({
      mutation: {
        onSuccess: (_, {}, __, { client }) => {
          invalidateGetAllProducts(client);
          emit('deleted', props.id);
        },
      },
    });
    return { mutate, error };
  },
});
</script>

<template>
  <Button label="Delete Product" severity="danger" @click="mutate({ id })" />
</template>
