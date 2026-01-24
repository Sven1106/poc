<script setup lang="ts">
import Home from './pages/Home.vue';
import { ServerStateDevtools } from '@/serverState/interfaces/IServerState';
</script>

<template>
  <Home />
  <ServerStateDevtools />
</template>
