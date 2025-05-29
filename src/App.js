import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Grid from "./components/Grid/Grid";
import PetriDish from "./components/PetriDish/PetriDish";
import { useEffect, useState } from "react";
import { CellState } from "./logic/gameOfLife/gameOfLife.types";
import SpeedSlider from "./components/SpeedSlider/SpeedSlider";
import { computeNextGeneration } from "./logic/gameOfLife/computeNextGeneration";
const App = ({ size = 20 }) => {
    const emptyGrid = (size) => Array.from({ length: size }, () => Array(size).fill(CellState.DEAD));
    const [grid, setGrid] = useState(() => emptyGrid(size));
    const [speed, setSpeed] = useState(100);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        if (!running)
            return;
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
    const updateCell = (rowIndex, colIndex, cellState) => {
        const newState = cellState === CellState.ALIVE ? CellState.DEAD : CellState.ALIVE;
        setGrid((prevGrid) => {
            const newGrid = prevGrid.slice();
            const newRow = [...newGrid[rowIndex]];
            newRow[colIndex] = newState;
            newGrid[rowIndex] = newRow;
            return newGrid;
        });
    };
    return (_jsxs(_Fragment, { children: [running ? (_jsx(PetriDish, { grid: grid })) : (_jsx(Grid, { grid: grid, updateCell: updateCell })), _jsxs("div", { className: "control-panel", children: [_jsx("button", { onClick: resetGrid, children: "clear" }), _jsx("button", { onClick: toggleRunGame, children: running ? "stop" : "run" }), _jsx(SpeedSlider, { speed: speed, updateSpeed: setSpeed })] })] }));
};
export default App;
