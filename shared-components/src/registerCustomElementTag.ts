// register.ts
import { defineCustomElement } from 'vue';

const modules = import.meta.glob('./**/*.ce.vue', { eager: true });

for (const path in modules) {
  const mod = modules[path] as any;
  const component = mod.default;

  // ./components/Button.ce.vue → Button.ce.vue
  const fileName = path.split('/').pop()!;

  // Button.ce.vue → Button
  const baseName = fileName.replace('.ce.vue', '');

  // Button → button, UserDialog → user-dialog
  const tagName = 'ce-' + baseName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

  customElements.define(tagName, defineCustomElement(component));
}
