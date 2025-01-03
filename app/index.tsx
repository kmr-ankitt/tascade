import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "../global.css";
import ShoppingList from "../components/ShoppingList";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/counter">Go to counter</Link>
      <ShoppingList name="Coffee" />
      <ShoppingList name="Tea" isCompleted />
      <ShoppingList name="Chocolates" isCompleted />
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
