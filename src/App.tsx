import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerformanceMonitor } from "@react-three/drei";

import { Piece } from "@/components/Piece";
import { PieceConfig } from "@/models/piece";

const App = () => {
  const pieceConfig: PieceConfig = {
    width: 2,
    length: 4,
    height: "tall",
    isFlat: false,
  };

  return (
    <main className="bg-black h-screen">
      <Canvas camera={{ position: [0, 7, 15], fov: 20 }} shadows>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 100, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -20, -10]} decay={0} intensity={Math.PI} />
        <Piece position={[0, 0, 0]} color="orange" config={pieceConfig} />
        <OrbitControls />
        <PerformanceMonitor />
      </Canvas>
    </main>
  );
};

export default App;
