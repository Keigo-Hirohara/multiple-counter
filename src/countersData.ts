import { writable, Writable } from 'svelte/store';
import type { counter } from './types';
export let countersData: Writable<counter[]> = writable([
  {
    id: 0,
    count: 0,
    title: 'new',
  },
]);
