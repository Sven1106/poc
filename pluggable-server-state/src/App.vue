<script lang="ts">
import { defineComponent, inject, h } from 'vue';
import Home from './pages/Home.vue';
import { ServerStateKey } from './serverState/interfaces/IServerState';
import type { IServerState } from './serverState/interfaces/IServerState';

export default defineComponent({
  name: 'App',
  components: { Home },
  setup() {
    const serverState = inject<IServerState>(ServerStateKey);
    if (!serverState) throw new Error('ServerState not provided');
    return { Devtools: serverState.devtools };
  },
});
</script>

<template>
  <Home />
  <component :is="Devtools" />
</template>
