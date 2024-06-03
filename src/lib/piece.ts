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
