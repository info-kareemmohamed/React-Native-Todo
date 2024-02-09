import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todo.slice";
import CompletedSlice from "./slice/todocompleted.slice";
import NotCompletedSlice from "./slice/todonotcompleted.slice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    completed:CompletedSlice.reducer,
    notcompleted:NotCompletedSlice.reducer,

  },
});
