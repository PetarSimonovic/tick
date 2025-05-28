import { computeNextGeneration } from "./gameOfLife";

test("helloGameOfLife returns hello", () => {
  expect(computeNextGeneration()).toBe("hello");
});
