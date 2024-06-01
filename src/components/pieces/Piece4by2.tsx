type PosProps = {
  position: [number, number, number];
};

const Cylinder = (props: PosProps) => {
  const CYLINDER_RADIUS = 2.4 / 16;
  const CYLINDER_HEIGHT = 1.6 / 16;

  return (
    <mesh {...props}>
      <cylinderGeometry
        args={[CYLINDER_RADIUS, CYLINDER_RADIUS, CYLINDER_HEIGHT]}
      />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

const Box = (props: PosProps) => {
  const BOX_LENGTH = 31.8 / 16;
  const BOX_HEIGHT = 9.6 / 16;
  const BOX_WIDTH = 15.8 / 16;

  return (
    <mesh {...props}>
      <boxGeometry args={[BOX_LENGTH, BOX_HEIGHT, BOX_WIDTH]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

const Piece4by2 = ({ position }: PosProps) => {
  const BLOCK_HEIGHT = 9.6 / 16;
  const CYLINDER_HEIGHT = 1.6 / 16;
  const EDGE_PADDING = 3.9 / 16;
  const BLOCK_LENGTH = 31.8 / 16;

  const HEIGHT_CHANGE = (BLOCK_HEIGHT + CYLINDER_HEIGHT) / 2;

  const cylinderPositions: PosProps["position"][] = [
    [
      position[0] - BLOCK_LENGTH / 2 + EDGE_PADDING,
      position[1] + HEIGHT_CHANGE,
      position[2] + EDGE_PADDING,
    ],
    [
      position[0] - BLOCK_LENGTH / 2 + EDGE_PADDING,
      position[1] + HEIGHT_CHANGE,
      position[2] - EDGE_PADDING,
    ],
    [
      position[0] + BLOCK_LENGTH / 2 - EDGE_PADDING,
      position[1] + HEIGHT_CHANGE,
      position[2] + EDGE_PADDING,
    ],
    [
      position[0] + BLOCK_LENGTH / 2 - EDGE_PADDING,
      position[1] + HEIGHT_CHANGE,
      position[2] - EDGE_PADDING,
    ],
    [
      position[0] + EDGE_PADDING,
      position[1] + HEIGHT_CHANGE,
      position[2] + EDGE_PADDING,
    ],
    [
      position[0] + EDGE_PADDING,
      position[1] + HEIGHT_CHANGE,
      position[2] - EDGE_PADDING,
    ],
    [
      position[0] - EDGE_PADDING,
      position[1] + HEIGHT_CHANGE,
      position[2] + EDGE_PADDING,
    ],
    [
      position[0] - EDGE_PADDING,
      position[1] + HEIGHT_CHANGE,
      position[2] - EDGE_PADDING,
    ],
  ];

  return (
    <>
      {cylinderPositions.map((pos, index) => (
        <Cylinder key={index} position={pos} />
      ))}
      <Box position={position} />
    </>
  );
};

export default Piece4by2;
