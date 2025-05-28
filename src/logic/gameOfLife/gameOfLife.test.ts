import { computeNextGeneration } from "./gameOfLife";
import type { Seed } from "./gameOfLife.types";

describe("computeNextGeneration", () => {
  describe("underpopulation", () => {
    // Rule: Any live cell with fewer than two live neighbours dies
    it("calculates underpopulation conditions for a single row with one cell: no live neighbours", () => {
      const seed: Seed = [[0, 1, 0]];
      const result: Seed = computeNextGeneration(seed);
      console.log(result);
      expect(result).toEqual([[0, 0, 0]]);
    });
    it("calculates underpopulation conditions for a single row with one cell: two live neighbours", () => {
      const seed: Seed = [[1, 1, 1]];
      const result: Seed = computeNextGeneration(seed);
      expect(result).toEqual([[0, 1, 0]]);
    });
  });
});
