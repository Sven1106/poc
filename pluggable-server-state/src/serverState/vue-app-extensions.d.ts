import 'vue';
import type { ServerState } from './interfaces/ServerState';

declare module 'vue' {
  export interface App {
    /**
     * Always place somewhere after .use(ServerStatePlugin).
     *
     * @param adapter The server state adapter to provide.
     */
    provideServerStateAdapter(adapter: ServerState): this;
  }
}
