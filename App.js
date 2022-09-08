import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./routes/stack";
import { LogBox } from "react-native";
import { configureStore } from "@reduxjs/toolkit";
import slider from "./reducers/rootReducer";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const store = configureStore({
  reducer: {},
});

export default function App() {
  return <MainNavigation></MainNavigation>;
}
