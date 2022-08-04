import { writable, Writable } from 'svelte/store';
import type { CounterType } from './types';
export let countersData: Writable<CounterType[]> = writable([
  {
    id: 0,
    count: 0,
    title: 'new',
  },
]);
