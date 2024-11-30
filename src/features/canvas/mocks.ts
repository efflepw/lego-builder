import { Piece } from "@/models/piece";

export const BASE_PLATE: Piece = {
  position: [0, 0, 0],
  color: "orange",
  config: {
    width: 24,
    length: 36,
    height: "flat",
    isSlick: false,
  },
};
