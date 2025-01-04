import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import "../global.css";
import ShoppingList from "../components/ShoppingList";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTime?: number;
};

const initalList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Chocolates" },
];
const testList: ShoppingListItemType[] = Array.from(
  { length: 500 },
  (_, index) => ({
    id: (index + 1).toString(),
    name: `Item ${index + 1}`,
  })
);

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

  const handleDelete = (id: string) => {
    const newShoppingList = ShoppingItemList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
  };

  const handleToggleComplete = (id: string) => {
    const newShoppingList = ShoppingItemList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completedAtTime: item.completedAtTime ? undefined : Date.now(),
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
  };

  return (
    <FlatList
      data={ShoppingItemList}
      style={[styles.container, { width: "100%" }]}
      contentContainerStyle={{ width: "100%", paddingHorizontal: 20 }}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => (
        <ShoppingList
          name={item.name}
          onDelete={() => handleDelete(item.id)}
          onToggleComplete={() => handleToggleComplete(item.id)}
          isCompleted={item.completedAtTime ? true : false}
        />
      )}
      ListEmptyComponent={() => (
        <View style={{ alignItems: "center" }}>
          <Text>Your shopping list is empty</Text>
        </View>
      )}
      ListHeaderComponent={
        <View style={{ paddingTop: 20, width: "100%" }}>
          <TextInput
            placeholder="Eg. Add Coffee"
            value={item}
            onChangeText={setItem}
            onSubmitEditing={handleSumbit}
            style={{
              borderColor: "#808080",
              borderWidth: 1,
              fontSize: 18,
              marginVertical: 20,
              borderRadius: 50,
              alignItems: "center",
              padding: 20,
              width: "100%",
            }}
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
});
