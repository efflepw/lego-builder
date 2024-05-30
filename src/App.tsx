import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { OrbitControls, PerformanceMonitor } from "@react-three/drei";

type BoxProps = {
  position: [number, number, number];
};

const Piece = (props: BoxProps) => {
  const meshRef = useRef<Mesh>(null);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.05 * delta;
      meshRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[2, 0.5, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

const App = () => {
  return (
    <main className="bg-black h-screen">
      <Canvas camera={{ position: [0, 7, 15], fov: 20 }} shadows>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Piece position={[0, 0, 0]} />
        <OrbitControls />
        <PerformanceMonitor />
      </Canvas>
    </main>
  );
};

export default App;
