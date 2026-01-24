import type { App } from 'vue';
import type { ServerState } from './interfaces/ServerState';
import type { HookKeys } from './internal/HookKeys';

const isHookKey = (key: keyof ServerState, adapter: ServerState): key is HookKeys =>
  key.startsWith('use') && typeof adapter[key] === 'function';

export const ServerStatePlugin = {
  install(app: App) {
    app.provideServerStateAdapter = function (adapter: ServerState) {
      (Object.keys(adapter) as (keyof ServerState)[])
        .filter((key) => isHookKey(key, adapter))
        .forEach((key) => {
          app.provide(key, adapter[key]);
        });
      app.use(adapter.plugin);
      return app;
    };
  },
};
