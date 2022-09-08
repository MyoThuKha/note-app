import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./rootReducer";

const store = configureStore({
  reducer: {
    noteReducer: counterReducer,
  },
});
export default store;
