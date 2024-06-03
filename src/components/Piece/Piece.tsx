import * as pieceSpec from "@/const/piece";
import {
  getInnerCylindersPositions,
  getPieceBoxSurfaces,
  getStudsPositions,
} from "@/lib/piece";
import { PieceConfig, Position, Surface } from "@/models/piece";

type PieceProps = {
  position: Position;
  color: string;
  config: PieceConfig;
};

const Studs = ({ color, position, config }: PieceProps) => {
  const studs: Position[] = getStudsPositions(position, config);

  return studs.map((p, idx) => (
    <mesh position={p} key={idx}>
      <cylinderGeometry
        args={[
          pieceSpec.TOP_CYLINDER_RADIUS,
          pieceSpec.TOP_CYLINDER_RADIUS,
          pieceSpec.TOP_CYLINDER_HEIGHT,
        ]}
      />
      <meshStandardMaterial color={color} />
    </mesh>
  ));
};

const InnerCylinders = ({ color, position, config }: PieceProps) => {
  const cylinders: Position[] = getInnerCylindersPositions(position, config);
  const boxHeight =
    config.height === "flat"
      ? pieceSpec.INNER_CYLINDER_FLAT_HEIGHT
      : pieceSpec.INNER_CYLINDER_TALL_HEIGHT;

  return cylinders.map((p, idx) => (
    <mesh key={idx}>
      <mesh position={p}>
        <cylinderGeometry
          args={[
            pieceSpec.INNER_CYLINDER_INNER_RADIUS,
            pieceSpec.INNER_CYLINDER_INNER_RADIUS,
            boxHeight,
            pieceSpec.INNER_CYLINDER_THETA,
            1,
            true,
          ]}
        />
        <meshStandardMaterial color={color} side={2} />
      </mesh>
      <mesh position={p}>
        <cylinderGeometry
          args={[
            pieceSpec.INNER_CYLINDER_OUTER_RADIUS,
            pieceSpec.INNER_CYLINDER_OUTER_RADIUS,
            boxHeight,
            pieceSpec.INNER_CYLINDER_THETA,
            1,
            true,
          ]}
        />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh
        position={[p[0], p[1] - boxHeight / 2, p[2]]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <ringGeometry
          args={[
            pieceSpec.INNER_CYLINDER_INNER_RADIUS,
            pieceSpec.INNER_CYLINDER_OUTER_RADIUS,
            pieceSpec.INNER_CYLINDER_THETA,
          ]}
        />
        <meshStandardMaterial color={color} />
      </mesh>
    </mesh>
  ));
};

const PieceBox = ({ position, config, color }: PieceProps) => {
  const surfaces: Surface[] = getPieceBoxSurfaces(position, config);

  // {
  //   position: [
  //     position[0],
  //     position[1] + (BOX_HEIGHT - TOP_THICKNESS - INNER_HEIGHT) / 2,
  //     position[2] + INSIDE_POSITION_SHIFT,
  //   ],
  //   shape: [INSIDE_THICKNESS, INNER_HEIGHT, INSIDE_WIDTH],
  // },
  // {
  //   position: [
  //     position[0],
  //     position[1] + (BOX_HEIGHT - TOP_THICKNESS - INNER_HEIGHT) / 2,
  //     position[2] - INSIDE_POSITION_SHIFT,
  //   ],
  //   shape: [INSIDE_THICKNESS, INNER_HEIGHT, INSIDE_WIDTH],
  // },

  return (
    <>
      {surfaces.map(({ position, shape }, idx) => (
        <mesh position={position} key={idx}>
          <boxGeometry args={shape} />
          <meshStandardMaterial color={color} />
        </mesh>
      ))}
    </>
  );
};

const Piece = (props: PieceProps) => {
  return (
    <mesh>
      {!props.config.isFlat && <Studs {...props} />}
      <PieceBox {...props} />
      <InnerCylinders {...props} />
    </mesh>
  );
};

export default Piece;
