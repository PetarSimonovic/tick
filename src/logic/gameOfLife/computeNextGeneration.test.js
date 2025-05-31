"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computeNextGeneration_1 = require("./computeNextGeneration");
describe("computeNextGeneration", function () {
    describe("underpopulation", function () {
        // Rule: Any live cell with fewer than two live neighbours dies
        it("calculates underpopulation conditions for a single row with one cell: no live neighbours", function () {
            var seed = [[0, 1, 0]];
            var result = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            expect(result).toEqual([[0, 0, 0]]);
        });
        it("calculates underpopulation conditions for a single row with one cell: two live neighbours", function () {
            var seed = [[1, 1, 1]];
            var result = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            expect(result).toEqual([[0, 1, 0]]);
        });
        it("calculates underpopulation conditions for a grid: no live neighbours", function () {
            var seed = [
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0],
            ];
            var nextGeneration = [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ];
            var result = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            expect(result).toEqual(nextGeneration);
        });
    });
    describe("overcrowding", function () {
        // Rule: Any live cell with more than three live neighbours dies, as if by overpopulation.
        it("calculates overcrowding conditions for multiple rows", function () {
            var seed = [
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
            ];
            var nextGeneration = [
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1],
            ];
            var result = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            expect(result).toEqual(nextGeneration);
        });
    });
    describe("reproduction", function () {
        // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        it("calculates reproduction conditions for multiple rows", function () {
            var seed = [
                [1, 0, 1],
                [0, 0, 0],
                [0, 1, 0],
            ];
            var nextGeneration = [
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0],
            ];
            var result = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            expect(result).toEqual(nextGeneration);
        });
    });
    describe(" Blinker oscillator", function () {
        it("returns correct state after three ticks", function () {
            var seed = [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 0],
            ];
            // Tick 1
            seed = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            // Tick 2
            seed = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            // Tick 3
            seed = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            var expected = [
                [0, 0, 0],
                [1, 1, 1],
                [0, 0, 0],
            ];
            expect(seed).toEqual(expected);
        });
    });
    describe("Glider", function () {
        it("returns correct state after four ticks on a 5x5 grid", function () {
            var seed = [
                [0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ];
            // Tick 1
            seed = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            // Tick 2
            seed = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            // Tick 3
            seed = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            // Tick 4
            seed = (0, computeNextGeneration_1.computeNextGeneration)(seed);
            var expected = [
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
