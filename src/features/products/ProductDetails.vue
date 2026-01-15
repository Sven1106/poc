<script lang="ts">
import { defineComponent } from 'vue'
import { useGetProductById } from '@/api/generated/client';


export default defineComponent({
  name: 'ProductDetails',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const { data, error, isFetching, isPending } = useGetProductById(props.id);

    return {
      data,
      error,
      isFetching,
      isPending,
    }
  },
})
</script>

<template>
  <div v-if="isPending"> Loading... </div>
  <div v-else-if="error">
    An error has occurred: {{ error }}
  </div>

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