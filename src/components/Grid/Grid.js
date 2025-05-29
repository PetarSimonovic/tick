import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
import Cell from "../Cell/Cell";
const Grid = ({ grid, updateCell }) => {
    return (_jsx(_Fragment, { children: _jsx("table", { children: _jsx("tbody", { children: grid.map((row, rowIdx) => (_jsx("tr", { children: row.map((cellState, colIdx) => (_jsx(Cell, { cellState: cellState, onClick: () => updateCell(rowIdx, colIdx, cellState) }, colIdx))) }, rowIdx))) }) }) }));
};
export default Grid;
