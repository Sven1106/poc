import { inject } from 'vue';
import type { ServerState } from './interfaces/ServerState';
import type { HookKeys } from '@/serverState/internal/HookKeys';

export function useEndpoint<K extends HookKeys>(key: K): ServerState[K] {
  const endpoint = inject<ServerState[K]>(key);

  if (!endpoint) {
    throw new Error(`Endpoint "${String(key)}" not provided`);
  }

  return endpoint;
}
