import { defineComponent, h, inject, type DefineComponent } from 'vue';
import type { ServerState } from './interfaces/ServerState';

export const ServerStateDevtools = defineComponent({
  name: 'ServerStateDevtools',
  setup() {
    const devToolsKey = 'devtools' satisfies keyof ServerState;

    const devTools = inject<ServerState[typeof devToolsKey]>(devToolsKey);
    if (!devTools) {
      throw new Error('ServerState not provided in main.ts');
    }
    return () => h(devTools as DefineComponent);
  },
});
