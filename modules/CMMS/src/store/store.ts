import { configureStore } from "@reduxjs/toolkit";

export const cmmsStore = configureStore({
  reducer: {

  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type CMMSRootState = ReturnType<typeof cmmsStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type CMMSAppDispatch = typeof cmmsStore.dispatch;
