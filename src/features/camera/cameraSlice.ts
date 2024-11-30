import { Side } from "@/models/camera";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CameraState {
  side: Side;
  lockPolarRotation: boolean;
}

const initialState: CameraState = {
  side: 0,
  lockPolarRotation: true,
};

export const canvasSlice = createSlice({
  name: "canvas",
  initialState,
  reducers: {
    setSide: (state, action: PayloadAction<Side>) => {
      state.side = action.payload;
    },
    toggleLockPolarRotation: (state) => {
      state.lockPolarRotation = !state.lockPolarRotation;
    },
  },
});

export const { setSide, toggleLockPolarRotation } = canvasSlice.actions;

export default canvasSlice.reducer;
