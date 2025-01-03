import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function ShoppingList({
  name,
  isCompleted,
}: {
  name: string;
  isCompleted?: boolean;
}) {
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
    <View
      style={{
        borderColor: "red",
        borderBottomWidth: 2,
        padding: 2,
        paddingHorizontal: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: isCompleted ? "#D3D3D3" : "",
      }}
    >
      {isCompleted ? (
        <Text
          style={{
            fontSize: 18,
            textDecorationLine: "line-through",
            color: "#a1a1ad",
          }}
        >
          {name}
        </Text>
      ) : (
        <Text style={{ fontSize: 18 }}>{name}</Text>
      )}
      <TouchableOpacity
        onPress={handleDelete}
        activeOpacity={0.8}
        style={
          isCompleted
            ? { backgroundColor: "#a1a1ad", padding: 2, borderRadius: 4 }
            : { backgroundColor: "#18181b", padding: 2, borderRadius: 4 }
        }
      >
        <Text
          style={{
            color: "#e4e4e7",
            fontWeight: "bold",
            textTransform: "uppercase",
            lineHeight: 20,
            letterSpacing: 1,
            textDecorationLine: isCompleted ? "line-through" : "none",
          }}
        >
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
}
