type Position = [number, number, number];
type Shape = [number, number, number];

type PosProps = {
  position: Position;
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

const InnerCylinders = ({ position }: PosProps) => {
  const INNER_RADIUS = 4.8 / 32;
  const OUTER_RADIUS = 6.5 / 32;
  const SHIFT_FROM_CENTER = 15.8 / 32;
  const HEIGHT = 8.6 / 16;
  const THETA = 24;

  const cylinders: Position[] = [
    position,
    [position[0] - SHIFT_FROM_CENTER, position[1], position[2]],
    [position[0] + SHIFT_FROM_CENTER, position[1], position[2]],
  ];

  return cylinders.map((p, idx) => (
    <mesh key={idx}>
      <mesh position={p}>
        <cylinderGeometry
          args={[INNER_RADIUS, INNER_RADIUS, HEIGHT, THETA, 1, true]}
        />
        <meshStandardMaterial color={"orange"} side={2} />
      </mesh>
      <mesh position={p}>
        <cylinderGeometry
          args={[OUTER_RADIUS, OUTER_RADIUS, HEIGHT, THETA, 1, true]}
        />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh
        position={[p[0], p[1] - HEIGHT / 2, p[2]]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <ringGeometry args={[INNER_RADIUS, OUTER_RADIUS, THETA]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </mesh>
  ));
};

type Surface = {
  position: Position;
  shape: Shape;
};

const PieceBox = ({ position }: PosProps) => {
  const BOX_LENGTH = 31.8 / 16;
  const BOX_HEIGHT = 9.6 / 16;
  const BOX_WIDTH = 15.8 / 16;
  const BOX_THICKNESS = 1.2 / 16;
  const TOP_THICKNESS = 1 / 16;
  const INSIDE_THICKNESS = 0.8 / 16;

  const OUTER_CYLINDER_RADIUS = 6.5 / 32;
  const INSIDE_WIDTH =
    (BOX_WIDTH - BOX_THICKNESS * 2 - OUTER_CYLINDER_RADIUS * 2) / 2;
  const INSIDE_POSITION_SHIFT =
    BOX_WIDTH / 2 - BOX_THICKNESS - INSIDE_WIDTH / 2;
  const INNER_HEIGHT = 6.3 / 16;

  const surfaces: Surface[] = [
    // top
    {
      position: [position[0], position[1] + BOX_HEIGHT / 2, position[2]],
      shape: [BOX_LENGTH, TOP_THICKNESS, BOX_WIDTH],
    },
    // left
    {
      position: [
        position[0] - (BOX_LENGTH - BOX_THICKNESS) / 2,
        position[1],
        position[2],
      ],
      shape: [BOX_THICKNESS, BOX_HEIGHT - TOP_THICKNESS, BOX_WIDTH],
    },
    // right
    {
      position: [
        position[0] + (BOX_LENGTH - BOX_THICKNESS) / 2,
        position[1],
        position[2],
      ],
      shape: [BOX_THICKNESS, BOX_HEIGHT - TOP_THICKNESS, BOX_WIDTH],
    },
    // front
    {
      position: [
        position[0],
        position[1],
        position[2] - (BOX_WIDTH - BOX_THICKNESS) / 2,
      ],
      shape: [BOX_LENGTH, BOX_HEIGHT - TOP_THICKNESS, BOX_THICKNESS],
    },
    // back
    {
      position: [
        position[0],
        position[1],
        position[2] + (BOX_WIDTH - BOX_THICKNESS) / 2,
      ],
      shape: [BOX_LENGTH, BOX_HEIGHT - TOP_THICKNESS, BOX_THICKNESS],
    },
    // back inner
    {
      position: [
        position[0],
        position[1] + (BOX_HEIGHT - TOP_THICKNESS - INNER_HEIGHT) / 2,
        position[2] + INSIDE_POSITION_SHIFT,
      ],
      shape: [INSIDE_THICKNESS, INNER_HEIGHT, INSIDE_WIDTH],
    },
    // front inner
    {
      position: [
        position[0],
        position[1] + (BOX_HEIGHT - TOP_THICKNESS - INNER_HEIGHT) / 2,
        position[2] - INSIDE_POSITION_SHIFT,
      ],
      shape: [INSIDE_THICKNESS, INNER_HEIGHT, INSIDE_WIDTH],
    },
  ];

  return (
    <>
      {surfaces.map(({ position, shape }, idx) => (
        <mesh position={position} key={idx}>
          <boxGeometry args={shape} />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      ))}
    </>
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
      <PieceBox position={position} />
      <InnerCylinders position={position} />
    </>
  );
};

export default Piece4by2;
