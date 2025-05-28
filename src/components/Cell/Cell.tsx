import React from "react";
import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
import "./Cell.scss";

type CellProps = {
  cellState: CellState;
  onClick: () => void;
};

const Cell = ({ cellState, onClick }: CellProps) => (
  <td
    className={
      cellState === CellState.ALIVE ? "cell cell__alive" : "cell cell__dead"
    }
    onClick={onClick}
  />
);

export default Cell;
