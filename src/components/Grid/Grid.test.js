"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var gameOfLife_types_1 = require("../../logic/gameOfLife/gameOfLife.types");
var Grid_1 = __importDefault(require("./Grid"));
var emptyGrid = function (size) {
    return Array.from({ length: size }, function () { return Array(size).fill(gameOfLife_types_1.CellState.DEAD); });
};
describe("Grid component", function () {
    it("renders a grid of the correct size", function () {
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Grid_1.default, { grid: emptyGrid(3), updateCell: function () { } }));
        // There should be 9 cells in a 3x3 grid
        expect(react_1.screen.getAllByRole("cell")).toHaveLength(9);
    });
    it("calls the updateCell function on click", function () {
        var updateCell = jest.fn();
        (0, react_1.render)((0, jsx_runtime_1.jsx)(Grid_1.default, { grid: emptyGrid(2), updateCell: updateCell }));
        var cells = react_1.screen.getAllByRole("cell");
        // Click the first cell
        react_1.fireEvent.click(cells[0]);
        // The cell should now have the 'cell__alive' class
        expect(updateCell).toHaveBeenCalled();
    });
});
