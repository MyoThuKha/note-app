import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./routes/stack";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import store from "./reducers/store";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation></MainNavigation>
    </Provider>
  );
}
