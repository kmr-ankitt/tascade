import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function ShoppingList({ name }: { name: string }) {
  const handleDelete = () => {
    Alert.alert("Delete", `Are you sure you want to delete ${name}?`, [
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
    <View className="border-red-500 border-b-2 p-2 px-5 w-screen flex-row justify-between items-center">
      <Text className="text-lg">{name}</Text>
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
  );
}
