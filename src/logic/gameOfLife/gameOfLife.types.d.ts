export declare const CellState: {
    readonly DEAD: 0;
    readonly ALIVE: 1;
    readonly WILL_DIE: 3;
    readonly WILL_BE_BORN: 4;
};
export type CellState = (typeof CellState)[keyof typeof CellState];
export type Seed = CellState[][];
