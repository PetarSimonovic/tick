import { jsx as _jsx } from "react/jsx-runtime";
import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
import "./Cell.scss";
const Cell = ({ cellState, onClick }) => (_jsx("td", { className: cellState === CellState.ALIVE ? "cell cell__alive" : "cell cell__dead", onClick: onClick }));
export default Cell;
