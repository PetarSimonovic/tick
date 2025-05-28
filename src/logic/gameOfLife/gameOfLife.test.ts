import { computeNextGeneration } from "./gameOfLife";
import type { Seed } from "./gameOfLife.types";

describe("computeNextGeneration", () => {
  it("calculates underpopulation conditions for a single row with one cell", () => {
    const seed: Seed = [[0, 1, 0]];
    const result: Seed = computeNextGeneration(seed);
    expect(result).toEqual([[0, 0, 0]]);
  });
});
