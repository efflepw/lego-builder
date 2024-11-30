import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  OrbitControlsChangeEvent,
  PerformanceMonitor,
  Stats,
} from "@react-three/drei";
import {
  EffectComposer,
  Outline,
  Selection,
} from "@react-three/postprocessing";

import { Piece } from "@/components/Piece";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSide } from "../camera";
import { getSide } from "@/lib/camera";
import { BASE_PLATE } from "./mocks";

const BuilderCanvas = () => {
  const interfaceState = useSelector((state: RootState) => state.interface);
  const pieces = useSelector((state: RootState) => state.canvas.pieces);
  const camera = useSelector((state: RootState) => state.camera);

  const dispatch = useDispatch();

  const piecesToRender = interfaceState.newPiece
    ? [...pieces, interfaceState.newPiece]
    : pieces;

  const handleRotationChange = (event?: OrbitControlsChangeEvent) => {
    if (event?.target) {
      const position = event.target.object.position;
      const azimuth = Math.atan2(position.z, position.x) + Math.PI;
      const side = getSide(azimuth);

      if (side != camera.side) {
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
      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor={0xffffff}
            edgeStrength={100}
            width={1000}
          />
        </EffectComposer>
        {piecesToRender.map((piece, index) => (
          <Piece
            key={index}
            position={piece.position}
            color={piece.color}
            config={piece.config}
          />
        ))}
      </Selection>
      {interfaceState.showBasePlate && <Piece {...BASE_PLATE} />}
      <OrbitControls
        onChange={handleRotationChange}
        maxPolarAngle={camera.lockPolarRotation ? Math.PI / 2 : Math.PI}
      />
      <PerformanceMonitor />
      <Stats className="bottom-0 !top-auto" />
    </Canvas>
  );
};

export default BuilderCanvas;
