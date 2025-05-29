import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from "@testing-library/react";
import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
import Grid from "./Grid";
const emptyGrid = (size) => Array.from({ length: size }, () => Array(size).fill(CellState.DEAD));
describe("Grid component", () => {
    it("renders a grid of the correct size", () => {
        render(_jsx(Grid, { grid: emptyGrid(3), updateCell: () => { } }));
        // There should be 9 cells in a 3x3 grid
        expect(screen.getAllByRole("cell")).toHaveLength(9);
    });
    it("calls the updateCell function on click", () => {
        const updateCell = jest.fn();
        render(_jsx(Grid, { grid: emptyGrid(2), updateCell: updateCell }));
        const cells = screen.getAllByRole("cell");
        // Click the first cell
        fireEvent.click(cells[0]);
        // The cell should now have the 'cell__alive' class
        expect(updateCell).toHaveBeenCalled();
    });
});
