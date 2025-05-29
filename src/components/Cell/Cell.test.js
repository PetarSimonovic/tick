import { jsx as _jsx } from "react/jsx-runtime";
import { render, fireEvent } from "@testing-library/react";
import Cell from "./Cell";
import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
const handleClick = jest.fn();
const renderCellInTable = (cellState, handleClick) => {
    return (_jsx("table", { children: _jsx("tbody", { children: _jsx("tr", { children: _jsx(Cell, { cellState: cellState, onClick: handleClick }) }) }) }));
};
describe("Cell component", () => {
    it("renders as alive or dead based on cellState", () => {
        const { getByRole, rerender } = render(renderCellInTable(CellState.DEAD, handleClick));
        const cell = getByRole("cell");
        expect(cell.className).toMatch(/cell cell__dead/);
        rerender(renderCellInTable(CellState.ALIVE, handleClick));
        expect(cell.className).toMatch(/cell cell__alive/);
    });
    it("calls onClick when clicked", () => {
        const { getByRole } = render(renderCellInTable(CellState.DEAD, handleClick));
        fireEvent.click(getByRole("cell"));
        expect(handleClick).toHaveBeenCalled();
    });
});
