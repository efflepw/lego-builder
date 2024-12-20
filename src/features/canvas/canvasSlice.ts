import { Piece } from "@/models/piece";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNewPiecePosition } from "./utils";

export interface CanvasState {
  pieces: Piece[];
}

const initialState: CanvasState = {
  pieces: [],
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    addNewPiece: (state, action: PayloadAction<Piece>) => {
      state.pieces.push({
        ...action.payload,
        position: getNewPiecePosition(action.payload),
      });

      localStorage.setItem("pieces", JSON.stringify(state.pieces));
    },
    setLoadedPieces: (state, action: PayloadAction<Piece[]>) => {
      state.pieces = action.payload;
    },
    clearCanvas: (state) => {
      state.pieces = [];
      localStorage.setItem("pieces", "[]");
    },
  },
});

export const { addNewPiece, setLoadedPieces, clearCanvas } =
  canvasSlice.actions;

export default canvasSlice.reducer;
