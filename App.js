import "react-native-gesture-handler";
import { StyleSheet, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import Header from "./Screens/Shared/Header";
import ProductContainer from "./Screens/Products/ProductContainer";

// Navigators
import Main from "./Navigators/Main";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Main />
    </NavigationContainer>
  );
}
