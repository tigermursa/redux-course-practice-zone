import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../Redux/Features/counterSlice/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    },
  })