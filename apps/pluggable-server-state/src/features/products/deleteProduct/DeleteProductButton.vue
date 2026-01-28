<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from 'ui-components';
import { useDeleteProduct, invalidateGetAllProducts } from '@/api/generated/client';

export default defineComponent({
  name: 'DeleteProductButton',
  components: {
    Button,
  },
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
  <Button label="Delete Product" size="small" @click="mutate({ id: id })"></Button>
</template>
