import { createApp } from 'vue';
import App from '@/App.vue';
import PrimeVue from '@primevue-ce/primevue/config';
import Aura from '@primeuix-ce/themes/aura';
import { registerCustomElements } from './registerCustomElements';

const primeVueConfig = {
  theme: { preset: Aura },
};
const app = createApp(App);
app.use(PrimeVue, primeVueConfig);
app.mount('#app');
registerCustomElements(primeVueConfig);
