import { Side } from "@/models/camera";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CameraState {
  side: Side;
}

const initialState: CameraState = {
  side: 0,
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setSide: (state, action: PayloadAction<Side>) => {
      state.side = action.payload;
    },
  },
});

export const { setSide } = canvasSlice.actions;

export default canvasSlice.reducer;
