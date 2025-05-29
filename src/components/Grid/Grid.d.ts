import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
type GridProps = {
    grid: CellState[][];
    updateCell: (rowIdx: number, colIdx: number, cellState: CellState) => void;
};
declare const Grid: ({ grid, updateCell }: GridProps) => import("react/jsx-runtime").JSX.Element;
export default Grid;
