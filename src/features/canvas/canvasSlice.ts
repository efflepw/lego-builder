import { Piece } from "@/models/piece";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CanvasState {
  pieces: Piece[];
}

const initialState: CanvasState = {
  pieces: [
    {
      position: [0, 0, 0],
      color: "orange",
      config: {
        width: 24,
        length: 36,
        height: "flat",
        isSlick: false,
      },
    },
  ],
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    addNewPiece: (state, action: PayloadAction<Piece>) => {
      state.pieces.push(action.payload);
    },
  },
});

export const { addNewPiece } = canvasSlice.actions;

export default canvasSlice.reducer;
