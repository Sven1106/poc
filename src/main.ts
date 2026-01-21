import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { ServerStateAdapter } from './serverState/adapters/serverStateAdapter';

const app = createApp(App);

app.use(ServerStateAdapter.plugin).use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount('#app');
