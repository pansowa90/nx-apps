import { State } from '@/app/context';

export const DEFAULT_STATE: Array<State> = Array.from({ length: 9 }, (_, i) => undefined);

export const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
