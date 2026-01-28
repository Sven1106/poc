<script setup lang="ts">
import Message from '@/components/Message.ce.vue';
import Autocomplete from '@/components/Autocomplete.ce.vue';
</script>

<template>
  <div style="display: flex; gap: 2rem; align-items: flex-start">
    <div style="flex: 1">
      <h2>Vue Components</h2>
      <Message />
      <Autocomplete />
    </div>
    <div style="flex: 1">
      <h2>Custom Elements</h2>
      <ce-message></ce-message>
      <ce-autocomplete></ce-autocomplete>
    </div>
  </div>
</template>
