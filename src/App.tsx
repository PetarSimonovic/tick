import Grid from "./components/Grid/Grid.tsx";
import { useEffect, useState } from "react";
import { CellState } from "./logic/gameOfLife/gameOfLife.types.ts";
import SpeedSlider from "./components/SpeedSlider/SpeedSlider.tsx";
import { computeNextGeneration } from "./logic/gameOfLife/computeNextGeneration";

const App = ({ size = 20 }) => {
  const emptyGrid = (size: number): CellState[][] =>
    Array.from({ length: size }, () => Array(size).fill(CellState.DEAD));

  const [grid, setGrid] = useState<CellState[][]>(() => emptyGrid(size));
  const [speed, setSpeed] = useState(100);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setGrid((prevGrid) => computeNextGeneration(prevGrid));
    }, speed); //

    return () => clearInterval(interval); // Cleanup on stop/unmount
  }, [running, speed]);

  const resetGrid = () => {
    setGrid(emptyGrid(size));
  };

  const toggleRunGame = () => {
    setRunning(!running);
  };

  const updateCell = (
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
      <Grid grid={grid} updateCell={updateCell} />;
      <button onClick={resetGrid}>clear</button>
      <button onClick={toggleRunGame}>{running ? "stop" : "run"}</button>
      <SpeedSlider speed={speed} updateSpeed={setSpeed} />
    </>
  );
};

export default App;
