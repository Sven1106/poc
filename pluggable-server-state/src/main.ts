import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { TanstackAdapter } from './serverState/adapters/tanstack/tanstackAdapter';
import { ServerStatePlugin } from './serverState/serverStatePlugin';

const app = createApp(App);

app
  .use(ServerStatePlugin)
  .provideServerStateAdapter(TanstackAdapter)
  // .provide(ServerStateKey, TanstackAdapter)
  // .use(TanstackAdapter.plugin)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  });

app.mount('#app');
