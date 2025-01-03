import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import "./global.css";

export default function App() {
  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete?", [
      {
        text: "yes",
        onPress: () => console.log("Ok deleting"),
        style: "destructive",
      },
      {
        text: "no",
        style: "cancel",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View className="border-red-500 border-b-2 p-2 px-5 w-screen flex-row justify-between items-center">
        <Text className="text-lg">Shopping list</Text>
        <TouchableOpacity
          onPress={handleDelete}
          activeOpacity={0.8}
          className="bg-zinc-900 p-2 rounded-md"
        >
          <Text className="text-zinc-200 font-bold uppercase h-auto tracking-wider">
            Delete
          </Text>
        </TouchableOpacity>
      </View>
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
