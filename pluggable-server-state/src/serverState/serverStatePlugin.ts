import type { App } from 'vue';
import type { IServerState } from './interfaces/IServerState';
import { ServerStateKey } from './interfaces/IServerState';

export const ServerStatePlugin = {
  install(app: App) {
    app.provideServerStateAdapter = function (adapter: IServerState) {
      app.provide(ServerStateKey, adapter);
      app.use(adapter.plugin);
      return app;
    };
  },
};
