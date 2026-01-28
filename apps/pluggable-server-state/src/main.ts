import { createApp } from 'vue';
import App from './App.vue';
import { TanstackAdapter } from '@/infra/serverState/adapters/tanstack/tanstackAdapter';
import { ServerStateKey } from '@/infra/serverState';

const app = createApp(App);

app.provide(ServerStateKey, TanstackAdapter).use(TanstackAdapter.plugin);

app.mount('#app');
