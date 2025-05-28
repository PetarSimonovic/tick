export const CellState = {
  DEAD: 0,
  ALIVE: 1,
  WILL_DIE: 3,
  WILL_BE_BORN: 4,
} as const;

export type CellState = (typeof CellState)[keyof typeof CellState];

export type Seed = CellState[][];
