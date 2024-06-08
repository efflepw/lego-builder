import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerformanceMonitor } from "@react-three/drei";

import { Piece } from "@/components/Piece";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const BuilderCanvas = () => {
  const newPiece = useSelector((state: RootState) => state.interface.newPiece);
  const pieces = useSelector((state: RootState) => state.canvas.pieces);

  return (
    <Canvas
      camera={{ position: [10, 20, 15], fov: 30 }}
      shadows
      className="h-dvh"
    >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 100, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -20, -10]} decay={0} intensity={Math.PI} />
      {newPiece && (
        <Piece
          position={newPiece.position}
          color={newPiece.color}
          config={newPiece.config}
        />
      )}
      {pieces.map((piece, index) => (
        <Piece
          key={index}
          position={piece.position}
          color={piece.color}
          config={piece.config}
        />
      ))}
      <OrbitControls />
      <PerformanceMonitor />
    </Canvas>
  );
};

export default BuilderCanvas;
