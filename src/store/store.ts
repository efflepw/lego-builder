import { configureStore } from "@reduxjs/toolkit";
import { interfaceReducer } from "@/features/interface";
import { canvasReducer } from "@/features/canvas";
import { cameraReducer } from "@/features/camera";

export const store = configureStore({
  reducer: {
    interface: interfaceReducer,
    canvas: canvasReducer,
    camera: cameraReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
