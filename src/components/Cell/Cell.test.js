"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var Cell_1 = __importDefault(require("./Cell"));
var gameOfLife_types_1 = require("../../logic/gameOfLife/gameOfLife.types");
var handleClick = jest.fn();
var renderCellInTable = function (cellState, handleClick) {
    return ((0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: (0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)(Cell_1.default, { cellState: cellState, onClick: handleClick }) }) }) }));
};
describe("Cell component", function () {
    it("renders as alive or dead based on cellState", function () {
        var _a = (0, react_1.render)(renderCellInTable(gameOfLife_types_1.CellState.DEAD, handleClick)), getByRole = _a.getByRole, rerender = _a.rerender;
        var cell = getByRole("cell");
        expect(cell.className).toMatch(/cell cell__dead/);
        rerender(renderCellInTable(gameOfLife_types_1.CellState.ALIVE, handleClick));
        expect(cell.className).toMatch(/cell cell__alive/);
    });
    it("calls onClick when clicked", function () {
        var getByRole = (0, react_1.render)(renderCellInTable(gameOfLife_types_1.CellState.DEAD, handleClick)).getByRole;
        react_1.fireEvent.click(getByRole("cell"));
        expect(handleClick).toHaveBeenCalled();
    });
});
