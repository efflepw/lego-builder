export type Position = [number, number, number];
export type Shape = [number, number, number];

export type Surface = {
  position: Position;
  shape: Shape;
};

export type PieceConfig = {
  width: number;
  length: number;
  height: "flat" | "tall";
  isSlick: boolean;
};

export type Piece = {
  position: Position;
  color: string;
  config: PieceConfig;
};
