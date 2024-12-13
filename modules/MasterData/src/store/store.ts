import { configureStore } from "@reduxjs/toolkit";
import SkillsSlice from "./features/skills/SkillsSlice";
import EmployeeSlice from "./features/Employee/EmployeeSlice";

export const masterDataStore = configureStore({
  reducer: {
    skills: SkillsSlice,
    employee: EmployeeSlice,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type MasterDataRootState = ReturnType<typeof masterDataStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type MasterDataAppDispatch = typeof masterDataStore.dispatch;
