import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import "../global.css";
import ShoppingList from "../components/ShoppingList";
import { useEffect, useState } from "react";
import { getData, saveData } from "../utils/storage";

type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
  lastUpdatedAtTimestamp: number;
};

const initalList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee", lastUpdatedAtTimestamp: Date.now() - 1000 },
  { id: "2", name: "Tea", lastUpdatedAtTimestamp: Date.now() - 2000 },
  { id: "3", name: "Chocolates", lastUpdatedAtTimestamp: Date.now() - 3000 },
];

const shoppingListKey = "shoppingList";

function orderShoppingList(shoppingList: ShoppingListItemType[]) {
  return shoppingList.sort((item1, item2) => {
    if (item1.completedAtTimestamp && item2.completedAtTimestamp) {
      return item2.completedAtTimestamp - item1.completedAtTimestamp;
    }

    if (item1.completedAtTimestamp && !item2.completedAtTimestamp) {
      return 1;
    }

    if (!item1.completedAtTimestamp && item2.completedAtTimestamp) {
      return -1;
    }

    if (!item1.completedAtTimestamp && !item2.completedAtTimestamp) {
      return item2.lastUpdatedAtTimestamp - item1.lastUpdatedAtTimestamp;
    }

    return 0;
  });
}

export default function App() {
  const [item, setItem] = useState("");
  const [ShoppingItemList, setShoppingList] =
    useState<ShoppingListItemType[]>(initalList);

  useEffect(() => {
    const fetchShoppingList = async () => {
      const newShoppingList = await getData(shoppingListKey);
      if (newShoppingList) {
        setShoppingList(newShoppingList);
      }
    };
    fetchShoppingList();
  }, []);

  const handleSumbit = () => {
    if (item) {
      const newShoppingList: ShoppingListItemType[] = [
        {
          id: new Date().toTimeString(),
          name: item,
          lastUpdatedAtTimestamp: Date.now(),
        },
        ...ShoppingItemList,
      ];
      setShoppingList(newShoppingList);
      saveData(shoppingListKey, newShoppingList);
      setItem("");
    }
  };

  const handleDelete = (id: string) => {
    const newShoppingList = ShoppingItemList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
    saveData(shoppingListKey, newShoppingList);
  };

  const handleToggleComplete = (id: string) => {
    const newShoppingList = ShoppingItemList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completedAtTimestamp: item.completedAtTimestamp
            ? undefined
            : Date.now(),
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
  };

  return (
    <FlatList
      data={orderShoppingList(ShoppingItemList)}
      style={[styles.container, { width: "100%" }]}
      contentContainerStyle={{ width: "100%", paddingHorizontal: 20 }}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => (
        <ShoppingList
          name={item.name}
          onDelete={() => handleDelete(item.id)}
          onToggleComplete={() => handleToggleComplete(item.id)}
          isCompleted={item.completedAtTimestamp ? true : false}
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
