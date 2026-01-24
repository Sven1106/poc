<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import { useProductsResource } from '@/serverState';

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
    const { deleteProduct, error } = useProductsResource().remove(props.id, {
      onSuccess: () => emit('deleted', props.id),
    });
    return { deleteProduct, error };
  },
});
</script>

<template>
  <Button label="Delete Product" severity="danger" @click="deleteProduct(id)" />
</template>
