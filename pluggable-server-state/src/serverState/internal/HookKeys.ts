import type { ServerState } from '@/serverState/interfaces/ServerState';

export type HookKeys = {
  [K in keyof ServerState]: K extends `use${string}`
    ? ServerState[K] extends Function
      ? K
      : never
    : never;
}[keyof ServerState];
