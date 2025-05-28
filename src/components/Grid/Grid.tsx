import { useEffect, useState } from "react";
import { computeNextGeneration } from "../../logic/gameOfLife/computeNextGeneration";
import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
import Cell from "../Cell/Cell";

type GridProps = {
  size: number;
};

const Grid = ({ size }: GridProps) => {
  const emptyGrid = (size: number): CellState[][] =>
    Array.from({ length: size }, () => Array(size).fill(CellState.DEAD));

  const [running, setRunning] = useState(false);
  const [grid, setGrid] = useState<CellState[][]>(() => emptyGrid(size));

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setGrid((prevGrid) => computeNextGeneration(prevGrid));
    }, 200); //

    return () => clearInterval(interval); // Cleanup on stop/unmount
  }, [running]);

  const resetGrid = () => {
    setGrid(emptyGrid(size));
  };

  const toggleRunGame = () => {
    setRunning(!running);
  };

  const handleCellClick = (
    rowIndex: number,
    colIndex: number,
    cellState: CellState
  ) => {
    const newState =
      cellState === CellState.ALIVE ? CellState.DEAD : CellState.ALIVE;

    setGrid((prevGrid) => {
      const newGrid = prevGrid.slice();
      const newRow = [...newGrid[rowIndex]];
      newRow[colIndex] = newState;
      newGrid[rowIndex] = newRow;
      return newGrid;
    });
  };

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
                  onClick={() => handleCellClick(rowIdx, colIdx, cellState)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={resetGrid}>clear</button>
      <button onClick={toggleRunGame}>{running ? "stop" : "run"}</button>
    </>
  );
};

export default Grid;
