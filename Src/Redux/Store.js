import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todo.slice";
import CompletedSlice from "./slice/todocompleted.slice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    completed:CompletedSlice.reducer,
  },
});
