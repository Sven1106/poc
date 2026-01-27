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

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

/* roboto font faces */
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

/* optional italic styles */
import '@fontsource/roboto/100-italic.css';
import '@fontsource/roboto/300-italic.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500-italic.css';
import '@fontsource/roboto/700-italic.css';
import '@fontsource/roboto/900-italic.css';
app.use(vuetify);

app.mount('#app');
registerCustomElements(primeVueConfig);
