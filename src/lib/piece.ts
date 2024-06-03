import { Position, Surface, PieceConfig, Shape } from "@/models/piece";
import * as pieceSpec from "@/const/piece";

export const getPieceBoxSurfaces = (
  position: Position,
  config: PieceConfig
) => {
  const boxHeight =
    config.height === "flat" ? pieceSpec.FLAT_BOX_HEIGHT : pieceSpec.BOX_HEIGHT;

  const topSurface: Surface = {
    position: [position[0], position[1] + boxHeight / 2, position[2]],
    shape: [
      pieceSpec.BASIC_SIZE * config.length,
      pieceSpec.BOX_TOP_THICKNESS,
      pieceSpec.BASIC_SIZE * config.width,
    ],
  };

  const shortSurfaceShift =
    pieceSpec.BASIC_SIZE * config.length - pieceSpec.BOX_SIDE_THICKNESS;

  const longSurfaceShift =
    pieceSpec.BASIC_SIZE * config.width - pieceSpec.BOX_SIDE_THICKNESS;

  const shortSideSurfaceShape: Shape = [
    pieceSpec.BOX_SIDE_THICKNESS,
    boxHeight - pieceSpec.BOX_TOP_THICKNESS,
    pieceSpec.BASIC_SIZE * config.width,
  ];

  const leftSurface: Surface = {
    position: [position[0] - shortSurfaceShift / 2, position[1], position[2]],
    shape: shortSideSurfaceShape,
  };

  const rightSurface: Surface = {
    position: [position[0] + shortSurfaceShift / 2, position[1], position[2]],
    shape: shortSideSurfaceShape,
  };

  const longSideSurfaceShape: Shape = [
    pieceSpec.BASIC_SIZE * config.length,
    boxHeight - pieceSpec.BOX_TOP_THICKNESS,
    pieceSpec.BOX_SIDE_THICKNESS,
  ];

  const frontSurface: Surface = {
    position: [position[0], position[1], position[2] - longSurfaceShift / 2],
    shape: longSideSurfaceShape,
  };

  const backSurface: Surface = {
    position: [position[0], position[1], position[2] + longSurfaceShift / 2],
    shape: longSideSurfaceShape,
  };

  return [topSurface, leftSurface, rightSurface, frontSurface, backSurface];
};

export const getPieceInnerSurfaces = (
  position: Position,
  config: PieceConfig
) => {
  const innerSurfaces: Surface[] = [];

  if (config.height === "tall" && config.width === 2 && config.length > 3) {
    const shape: Shape = [
      pieceSpec.INNER_SURFACE_THICKNESS,
      pieceSpec.INNER_SURFACE_HEIGHT,
      pieceSpec.INNER_SURFACE_WIDTH,
    ];

    const heightShift =
      (pieceSpec.BOX_HEIGHT -
        pieceSpec.BOX_TOP_THICKNESS -
        pieceSpec.INNER_SURFACE_HEIGHT) /
      2;

    const widthShift =
      pieceSpec.BASIC_SIZE -
      pieceSpec.BOX_SIDE_THICKNESS -
      pieceSpec.INNER_SURFACE_WIDTH / 2;

    for (let i = 2; i < config.length; i = i + 2) {
      const lengthShift = pieceSpec.BASIC_SIZE * (i - config.length / 2);

      const surface1: Surface = {
        position: [
          position[0] + lengthShift,
          position[1] + heightShift,
          position[2] + widthShift,
        ],
        shape,
      };

      const surface2: Surface = {
        position: [
          position[0] + lengthShift,
          position[1] + heightShift,
          position[2] - widthShift,
        ],
        shape,
      };

      innerSurfaces.push(surface1, surface2);
    }
  }

  return innerSurfaces;
};

export const getStudsPositions = (position: Position, config: PieceConfig) => {
  const boxHeight =
    config.height === "flat" ? pieceSpec.FLAT_BOX_HEIGHT : pieceSpec.BOX_HEIGHT;

  const studs: Position[] = [];

  for (let w = 0; w < config.width; w++) {
    for (let l = 0; l < config.length; l++) {
      studs.push([
        position[0] + pieceSpec.BASIC_SIZE * (l + 0.5 - config.length / 2),
        position[1] + boxHeight / 2 + pieceSpec.BOX_TOP_THICKNESS,
        position[2] + pieceSpec.BASIC_SIZE * (w + 0.5 - config.width / 2),
      ]);
    }
  }

  return studs;
};

export const getInnerCylindersPositions = (
  position: Position,
  config: PieceConfig
): Position[] => {
  const cylinders: Position[] = [];

  for (let w = 1; w < config.width; w++) {
    for (let l = 1; l < config.length; l++) {
      cylinders.push([
        position[0] + pieceSpec.BASIC_SIZE * (l - config.length / 2),
        position[1],
        position[2] + pieceSpec.BASIC_SIZE * (w - config.width / 2),
      ]);
    }
  }

  return cylinders;
};
