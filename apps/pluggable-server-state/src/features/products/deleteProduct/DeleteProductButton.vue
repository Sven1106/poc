<script lang="ts">
import { defineComponent } from 'vue';
import { useDeleteProduct, invalidateGetAllProducts } from '@/api/generated/client';

export default defineComponent({
  name: 'DeleteProductButton',
  emits: ['deleted'],
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
  <button style="background-color: red; color: white" @click="mutate({ id })">
    Delete Product
  </button>
</template>
