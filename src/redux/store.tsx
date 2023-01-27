import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./queryReducer";

export const store = configureStore({
  reducer : {
    queryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>