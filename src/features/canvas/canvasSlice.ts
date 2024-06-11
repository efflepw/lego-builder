import { Piece } from "@/models/piece";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      state.pieces.push(action.payload);

      localStorage.setItem("pieces", JSON.stringify(state.pieces));
    },
    setLoadedPieces: (state, action: PayloadAction<Piece[]>) => {
      state.pieces = action.payload;
    },
  },
});

export const { addNewPiece, setLoadedPieces } = canvasSlice.actions;

export default canvasSlice.reducer;
