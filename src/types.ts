export type CounterType = {
  count: number;
  title: string;
};

export type RemoveCounterType = {
  (counterIndex: number): void;
};
