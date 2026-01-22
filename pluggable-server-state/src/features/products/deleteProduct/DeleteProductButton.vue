<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import { useDeleteProduct } from './adapters/useDeleteProduct';
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
    const { deleteProduct, error } = useDeleteProduct({
      onSuccess: (id) => emit('deleted', id),
    });

    return { deleteProduct, error };
  },
});
</script>

<template>
  <Button label="Delete Product" severity="danger" @click="deleteProduct(id)" />
</template>
