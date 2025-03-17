import { configureStore } from "@reduxjs/toolkit";

export const qmsStore = configureStore({
  reducer: {

  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type QmsRootState = ReturnType<typeof qmsStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type QmsAppDispatch = typeof qmsStore.dispatch;
