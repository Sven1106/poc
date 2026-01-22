<script lang="ts">
import { defineComponent } from 'vue';
const { devtools: Devtools } = (await import('./serverState/adapters/serverStateAdapter'))
  .ServerStateAdapter;
import Home from './pages/Home.vue';

export default defineComponent({
  name: 'App',
  components: { Devtools, Home },
});
</script>

<template>
  <Home />
  <Devtools />
</template>
