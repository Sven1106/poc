import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { TanstackAdapter } from './infra/serverState/adapters/tanstack/tanstackAdapter';
import { ServerStateKey } from '@/infra/serverState';

const app = createApp(App);

app
  .provide(ServerStateKey, TanstackAdapter)
  .use(TanstackAdapter.plugin)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });

app.mount('#app');
