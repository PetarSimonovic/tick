import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
const PetriDish = ({ grid }) => {
    const centerX = grid[0].length / 2;
    const centerY = grid.length / 2;
    const [positioned, setPositioned] = useState(false);
    function CenterCamera({ centerX, centerY, }) {
        const { camera } = useThree();
        useEffect(() => {
            if (positioned)
                return;
            setPositioned(true);
            camera.position.set(centerX, centerY, 50); // 20 units above
            camera.lookAt(centerX, centerY, 0);
        }, [camera, centerX, centerY, positioned]);
        return null;
    }
    return (_jsx("div", { className: "canvas-container", children: _jsxs(Canvas, { children: [_jsx(CenterCamera, { centerX: centerX, centerY: centerY }), _jsx("ambientLight", { intensity: 0.3 }), _jsx("directionalLight", { color: "red", position: [0, 0, 2] }), grid.map((row, rowIdx) => row.map((cell, colIdx) => cell === CellState.ALIVE ? (_jsxs("mesh", { position: [colIdx, rowIdx, 0], children: [_jsx("boxGeometry", { args: [1, 1, 1] }), _jsx("meshStandardMaterial", {})] }, `${rowIdx}-${colIdx}`)) : null)), _jsx(OrbitControls, {})] }) }));
};
export default PetriDish;
