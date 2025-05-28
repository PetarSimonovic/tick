import { computeNextGeneration } from "./computeNextGeneration";
import type { Seed } from "./gameOfLife.types";

describe("computeNextGeneration", () => {
  describe("underpopulation", () => {
    // Rule: Any live cell with fewer than two live neighbours dies
    it("calculates underpopulation conditions for a single row with one cell: no live neighbours", () => {
      const seed: Seed = [[0, 1, 0]];
      const result: Seed = computeNextGeneration(seed);
      expect(result).toEqual([[0, 0, 0]]);
    });
    it("calculates underpopulation conditions for a single row with one cell: two live neighbours", () => {
      const seed: Seed = [[1, 1, 1]];
      const result: Seed = computeNextGeneration(seed);
      expect(result).toEqual([[0, 1, 0]]);
    });
    it("calculates underpopulation conditions for a grid: no live neighbours", () => {
      const seed: Seed = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];
      const nextGeneration: Seed = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const result: Seed = computeNextGeneration(seed);
      expect(result).toEqual(nextGeneration);
    });
  });

  describe("overcrowding", () => {
    // Rule: Any live cell with more than three live neighbours dies, as if by overpopulation.

    it("calculates overcrowding conditions for multiple rows", () => {
      const seed: Seed = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ];

      const nextGeneration = [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ];
      const result: Seed = computeNextGeneration(seed);
      expect(result).toEqual(nextGeneration);
    });
  });

  describe("reproduction", () => {
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

    it("calculates reproduction conditions for multiple rows", () => {
      const seed: Seed = [
        [1, 0, 1],
        [0, 0, 0],
        [0, 1, 0],
      ];

      const nextGeneration = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];

      const result: Seed = computeNextGeneration(seed);
      console.log(result);
      expect(result).toEqual(nextGeneration);
    });
  });
  describe(" Blinker oscillator", () => {
    it("returns correct state after three ticks", () => {
      let seed: Seed = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];

      // Tick 1
      seed = computeNextGeneration(seed);
      // Tick 2
      seed = computeNextGeneration(seed);
      // Tick 3
      seed = computeNextGeneration(seed);

      const expected: Seed = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];

      expect(seed).toEqual(expected);
    });
  });
  describe("Glider", () => {
    it("returns correct state after four ticks on a 5x5 grid", () => {
      let seed: Seed = [
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];

      // Tick 1
      seed = computeNextGeneration(seed);
      // Tick 2
      seed = computeNextGeneration(seed);
      // Tick 3
      seed = computeNextGeneration(seed);
      // Tick 4
      seed = computeNextGeneration(seed);

      const expected: Seed = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ];

      expect(seed).toEqual(expected);
    });
  });
});
