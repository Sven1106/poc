<script setup lang="ts">
import Home from './pages/Home.vue';
import { ServerStateDevtools } from '@/infra/serverState';
</script>

<template>
  <Home />
  <ServerStateDevtools />
</template>
