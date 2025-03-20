import { configureStore } from "@reduxjs/toolkit";

export const iiotStore = configureStore({
  reducer: {

  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type IIOTRootState = ReturnType<typeof iiotStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IIOTAppDispatch = typeof iiotStore.dispatch;
