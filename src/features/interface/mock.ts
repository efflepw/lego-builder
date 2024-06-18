import { Piece } from "@/models/piece";

export const newPieceState: Piece = {
  position: [0, 2, 0],
  color: "orange",
  config: {
    width: 2,
    length: 4,
    height: "tall",
    isSlick: false,
  },
};
