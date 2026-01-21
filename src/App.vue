<script lang="ts">
import { defineComponent } from 'vue';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import Home from './pages/Home.vue';

export default defineComponent({
    name: 'App',
    components: { VueQueryDevtools, Home },
});
</script>

<template>
    <Home />
    <VueQueryDevtools />
</template>
