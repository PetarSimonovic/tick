import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
import "./Cell.scss";
type CellProps = {
    cellState: CellState;
    onClick: () => void;
};
declare const Cell: ({ cellState, onClick }: CellProps) => import("react/jsx-runtime").JSX.Element;
export default Cell;
