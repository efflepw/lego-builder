import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  OrbitControlsChangeEvent,
  PerformanceMonitor,
} from "@react-three/drei";

import { Piece } from "@/components/Piece";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSide } from "../camera";
import { getSide } from "@/lib/camera";

const BuilderCanvas = () => {
  const newPiece = useSelector((state: RootState) => state.interface.newPiece);
  const pieces = useSelector((state: RootState) => state.canvas.pieces);
  const cameraSide = useSelector((state: RootState) => state.camera.side);

  const dispatch = useDispatch();

  const piecesToRender = newPiece ? [...pieces, newPiece] : pieces;

  const handleRotationChange = (event?: OrbitControlsChangeEvent) => {
    if (event?.target) {
      const position = event.target.object.position;
      const azimuth = Math.atan2(position.z, position.x) + Math.PI;
      const side = getSide(azimuth);

      if (side != cameraSide) {
        dispatch(setSide(side));
      }
    }
  };

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
      {piecesToRender.map((piece, index) => (
        <Piece
          key={index}
          position={piece.position}
          color={piece.color}
          config={piece.config}
        />
      ))}
      <OrbitControls onChange={handleRotationChange} />
      <PerformanceMonitor />
    </Canvas>
  );
};

export default BuilderCanvas;
