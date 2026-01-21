import type { App, DefineComponent } from 'vue';

export type ServerStatePort = {
  plugin: {
    install: (app: App) => void;
  };
  devtools: DefineComponent | {};
};
