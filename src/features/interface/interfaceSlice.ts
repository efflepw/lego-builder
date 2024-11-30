import { Piece, Position } from "@/models/piece";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newPieceState } from "./mock";

export interface InterfaceState {
  newPiece: Piece | null;
  showBasePlate: boolean;
}

const initialState: InterfaceState = {
  newPiece: null,
  showBasePlate: true,
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    restoreDefault: (state) => {
      state.newPiece = initialState.newPiece;
    },
    addEmptyPiece: (state) => {
      state.newPiece = newPieceState;
    },
    updateNewPiecePosition: (state, action: PayloadAction<Position>) => {
      if (!state.newPiece) return;

      state.newPiece.position = action.payload;
    },
    updateNewPieceColor: (state, action: PayloadAction<string>) => {
      if (!state.newPiece) return;

      state.newPiece.color = action.payload;
    },
    updateNewPieceConfig: (
      state,
      action: PayloadAction<Partial<Piece["config"]>>
    ) => {
      if (!state.newPiece) return;

      state.newPiece.config = {
        ...state.newPiece.config,
        ...action.payload,
      };
    },
    rotatePiece: (state) => {
      if (!state.newPiece) return;

      const temp = state.newPiece.config.width;

      state.newPiece.config.width = state.newPiece.config.length;
      state.newPiece.config.length = temp;
    },
    toggleShowBasePlate: (state) => {
      state.showBasePlate = !state.showBasePlate;
    },
  },
});

export const {
  addEmptyPiece,
  restoreDefault,
  rotatePiece,
  updateNewPiecePosition,
  updateNewPieceColor,
  updateNewPieceConfig,
  toggleShowBasePlate,
} = interfaceSlice.actions;

export default interfaceSlice.reducer;
