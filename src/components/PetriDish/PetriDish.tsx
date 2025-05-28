import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const PetriDish = () => {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight color="red" position={[0, 0, 2]} />
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default PetriDish;
