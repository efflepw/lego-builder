import { Piece, Position } from "@/models/piece";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InterfaceState {
  newPiece: Piece | null;
}

const initialState: InterfaceState = {
  newPiece: {
    position: [0, 2, 0],
    color: "orange",
    config: {
      width: 2,
      length: 4,
      height: "tall",
      isSlick: false,
    },
  },
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    restoreDefault: (state) => {
      state.newPiece = initialState.newPiece;
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
  },
});

export const {
  restoreDefault,
  updateNewPiecePosition,
  updateNewPieceColor,
  updateNewPieceConfig,
} = interfaceSlice.actions;

export default interfaceSlice.reducer;
