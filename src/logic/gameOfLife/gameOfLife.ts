import type { Seed } from "./gameOfLife.types";

const Neighbours: number[][] = [
  [-1, -1], // top left
  [-1, 0], // top
  [-1, 1], // top right
  [0, -1], // left
  [0, 1], // right
  [1, -1], // bottom left
  [1, 0], // bottom
  [1, 1], // bottom right
];

export const computeNextGeneration = (seed: Seed) => {
  return seed.map((row: number[], rowIndex: number) => {
    return row.map((cell, colIndex) => {
      const liveNeighbours: number = Neighbours.reduce(
        (numberOfLiveNeighbours, [dx, dy]) => {
          const neighbourRow: number = rowIndex + dx;
          const neighbourCol = colIndex + dy;
          // Check bounds
          if (inGridBounds(neighbourRow, neighbourCol, seed)) {
            return numberOfLiveNeighbours + seed[neighbourRow][neighbourCol];
          }
          return numberOfLiveNeighbours;
        },
        0
      );
      // For now, just return the count for demonstration
      cell = liveNeighbours < 2 ? 0 : 1;
      return cell;
    });
  });
};

const inGridBounds = (
  neighbourRow: number,
  neighbourCol: number,
  seed: number[][]
) => {
  return (
    neighbourRow >= 0 &&
    neighbourRow < seed.length &&
    neighbourCol >= 0 &&
    neighbourCol < seed[0].length
  );
};
