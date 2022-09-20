import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import MainNavigation from "./routes/stack";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import store from "./reducers/store";
import { persistor } from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation></MainNavigation>
      </PersistGate>
    </Provider>
  );
}
