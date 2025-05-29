import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
import Cell from "../Cell/Cell";

type GridProps = {
  grid: CellState[][];
  updateCell: (rowIdx: number, colIdx: number, cellState: CellState) => void;
};

const Grid = ({ grid, updateCell }: GridProps) => {
  return (
    <>
      <table>
        <tbody>
          {grid.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cellState: CellState, colIdx) => (
                <Cell
                  key={colIdx}
                  cellState={cellState}
                  onClick={() => updateCell(rowIdx, colIdx, cellState)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Grid;
