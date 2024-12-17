import { Piece, Position } from "@/models/piece";

export const getNewPiecePosition = (newPiece: Piece): Position => {
  const shiftX = newPiece.config.length % 2 == 1 ? 0.25 : 0;
  const shiftZ = newPiece.config.width % 2 == 1 ? 0.25 : 0;

  const [x, y, z] = newPiece.position;

  return [x + shiftX, y, z + shiftZ];
};
