import { CellState } from "./gameOfLife.types";
// Not optimised for large grids
const NEIGHBOUR_OFFSETS = [
    [-1, -1], // top left
    [-1, 0], // top
    [-1, 1], // top right
    [0, -1], // left
    [0, 1], // right
    [1, -1], // bottom left
    [1, 0], // bottom
    [1, 1], // bottom right
];
export const computeNextGeneration = (seed) => {
    const processedGeneration = processGeneration(seed);
    return nextGeneration(processedGeneration);
};
const processGeneration = (seed) => {
    return seed.map((row, rowIndex) => row.map((cell, colIndex) => checkSurvivalConditions(cell, checkNeighbours(rowIndex, colIndex, seed))));
};
const checkNeighbours = (rowIndex, colIndex, seed) => {
    return NEIGHBOUR_OFFSETS.reduce((numberOfLiveNeighbours, [dx, dy]) => {
        const neighbourRow = rowIndex + dx;
        const neighbourCol = colIndex + dy;
        // Check bounds
        if (inGridBounds(neighbourRow, neighbourCol, seed)) {
            return numberOfLiveNeighbours + seed[neighbourRow][neighbourCol];
        }
        return numberOfLiveNeighbours;
    }, 0);
};
const inGridBounds = (neighbourRow, neighbourCol, seed) => {
    return (neighbourRow >= 0 &&
        neighbourRow < seed.length &&
        neighbourCol >= 0 &&
        neighbourCol < seed[0].length);
};
const checkSurvivalConditions = (cell, liveNeighbours) => {
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    // Any live cell with two or three live neighbours lives on to the next generation.
    if (liveNeighbours === 3 && cell === CellState.DEAD)
        return CellState.WILL_BE_BORN;
    if ((liveNeighbours === 2 || liveNeighbours === 3) &&
        cell === CellState.ALIVE)
        return CellState.ALIVE;
    // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    if (cell === CellState.ALIVE) {
        if (liveNeighbours < 2 || liveNeighbours > 3)
            return CellState.WILL_DIE;
    }
    return cell;
};
const nextGeneration = (processedGeneration) => {
    return processedGeneration.map((row) => row.map((cell) => {
        if (cell === CellState.WILL_DIE)
            return CellState.DEAD;
        if (cell === CellState.WILL_BE_BORN)
            return CellState.ALIVE;
        return cell;
    }));
};
