import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "./global.css";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingList name="Coffee" />
      <ShoppingList name="Tea" />
      <ShoppingList name="Chocolates" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
