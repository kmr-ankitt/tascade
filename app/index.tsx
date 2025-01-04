import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import "../global.css";
import ShoppingList from "../components/ShoppingList";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
};

const initalList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Chocolates" },
];

export default function App() {
  const [item, setItem] = useState("");
  const [ShoppingItemList, setShoppingList] =
    useState<ShoppingListItemType[]>(initalList);

  const handleSumbit = () => {
    if (item) {
      const newShoppingList: ShoppingListItemType[] = [
        { id: new Date().toTimeString(), name: item },
        ...ShoppingItemList,
      ];
      setShoppingList(newShoppingList);
      setItem("");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "center", paddingBottom: 24 }}
    >
      <TextInput
        placeholder="Eg. Add Coffee"
        value={item}
        onChangeText={setItem}
        onSubmitEditing={handleSumbit}
        style={{
          borderColor: "#808080",
          borderWidth: 1,
          padding: 12,
          width: "90%",
          marginBottom: 12,
          fontSize: 18,
          borderRadius: 50,
        }}
      />
      {ShoppingItemList.map((val) => (
        <ShoppingList name={val.name} key={val.id} />
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
