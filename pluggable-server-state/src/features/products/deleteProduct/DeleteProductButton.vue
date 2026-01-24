<script lang="ts">
import { defineComponent, inject } from 'vue';
import Button from 'primevue/button';
import { ServerStateKey } from '@/serverState/interfaces/IServerState';
import type { IServerState } from '@/serverState/interfaces/IServerState';

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
    const serverState = inject<IServerState>(ServerStateKey);
    if (!serverState) {
      throw new Error('🚀 ~ DeleteProductButton.vue:20 ~ ServerState not provided in main.ts');
    }
    const { deleteProduct, error } = serverState.useDeleteProduct({
      onSuccess: (id) => emit('deleted', id),
    });
    return { deleteProduct, error };
  },
});
</script>

<template>
  <Button label="Delete Product" severity="danger" @click="deleteProduct(id)" />
</template>
