import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
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
    useState<ShoppingListItemType[]>(testList);

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
    <FlatList
      data={ShoppingItemList}
      style={styles.container}
      contentContainerStyle={{ alignItems: "center" }}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => <ShoppingList name={item.name} />}
      ListEmptyComponent={() => (
        <View style={{ alignItems: "center" }}>
          <Text>Your shopping list is empty</Text>
        </View>
      )}
      ListHeaderComponent={
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
            paddingHorizontal: 140,
            paddingTop: 20,
          }}
        />
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
