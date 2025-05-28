import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { CellState } from "../../logic/gameOfLife/gameOfLife.types";
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
type PetriDishProps = {
  grid: CellState[][];
};
const PetriDish = ({ grid }: PetriDishProps) => {
  const centerX = grid[0].length / 2;
  const centerY = grid.length / 2;
  const [positioned, setPositioned] = useState(false);
  function CenterCamera({
    centerX,
    centerY,
  }: {
    centerX: number;
    centerY: number;
  }) {
    const { camera } = useThree();

    useEffect(() => {
      if (positioned) return;
      setPositioned(true);
      camera.position.set(centerX, centerY, 50); // 20 units above
      camera.lookAt(centerX, centerY, 0);
    }, [camera, centerX, centerY, positioned]);
    return null;
  }

  return (
    <div className="canvas-container">
      <Canvas>
        <CenterCamera centerX={centerX} centerY={centerY} />
        <ambientLight intensity={0.3} />
        <directionalLight color="red" position={[0, 0, 2]} />
        {grid.map((row: CellState[], rowIdx) =>
          row.map((cell: CellState, colIdx) =>
            cell === CellState.ALIVE ? (
              <mesh
                key={`${rowIdx}-${colIdx}`}
                position={[colIdx, rowIdx, 0]} // adjust as needed
              >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial />
              </mesh>
            ) : null
          )
        )}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default PetriDish;
