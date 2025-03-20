import { configureStore } from "@reduxjs/toolkit";

export const wipStore = configureStore({
  reducer: {

  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type WipRootState = ReturnType<typeof wipStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type WipAppDispatch = typeof wipStore.dispatch;
