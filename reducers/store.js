import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";

const store = configureStore({
  reducer: {
    mainData: noteReducer,
  },
});

export default store;
