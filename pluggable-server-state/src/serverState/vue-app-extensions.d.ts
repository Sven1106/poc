import 'vue';
import type { IServerState } from './interfaces/IServerState';

declare module 'vue' {
  export interface App {
    /**
     * Always place somewhere after .use(ServerStatePlugin).
     *
     * @param adapter The server state adapter to provide.
     */
    provideServerStateAdapter(adapter: IServerState): this;
  }
}
