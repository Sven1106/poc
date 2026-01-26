// register.ts
import { defineCustomElement, type DefineComponent } from 'vue';
import PrimeVue, { wrapCustomElement } from '@primevue-ce/primevue/config';
import type { PrimeVueConfiguration } from '@primevue-ce/primevue/config';

const modules = import.meta.glob('./**/*.ce.vue', { eager: true });

const registerCustomElements = (primeVueConfig: PrimeVueConfiguration) => {
  for (const path in modules) {
    const mod = modules[path] as any;
    const component = mod.default as DefineComponent;

    // ./components/Button.ce.vue → Button.ce.vue
    const fileName = path.split('/').pop()!;

    // Button.ce.vue → Button
    const baseName = fileName.replace('.ce.vue', '');

    // Button → button, UserDialog → user-dialog
    const tagName = 'ce-' + baseName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

    const wrapped = wrapCustomElement(
      defineCustomElement(component, {
        configureApp(app) {
          app.use(PrimeVue, primeVueConfig);
        },
      }),
    );
    customElements.define(tagName, wrapped);
  }
};
export { registerCustomElements };
