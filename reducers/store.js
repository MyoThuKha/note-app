import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "data",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, noteReducer);

const store = configureStore({
  reducer: {
    mainData: persistedReducer,
  },
  middleware: [thunk],
});

export default store;
export const persistor = persistStore(store);
