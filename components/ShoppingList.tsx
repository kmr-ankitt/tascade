import { AntDesign, Feather } from "@expo/vector-icons";
import { Alert, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function ShoppingList({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
}: {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete?: () => void;
}) {
  const handleDelete = () => {
    Alert.alert("Delete", `Are you sure you want to delete ${name}?`, [
      {
        text: "yes",
        onPress: () => onDelete(),
        style: "destructive",
      },
      {
        text: "no",
        style: "cancel",
      },
    ]);
  };
  return (
    <Pressable
      onPress={onToggleComplete}
      style={{
        borderColor: "#1a759f",
        borderBottomWidth: 2,
        paddingBlock: 18,
        paddingHorizontal: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: isCompleted ? "#D3D3D3" : "#fff",
      }}
    >
      <Feather
        name={!isCompleted ? `circle` : `check-circle`}
        size={20}
        color={"#1a759f"}
      />
      <Text
        style={{
          fontSize: 22,
          textDecorationLine: isCompleted ? "line-through" : "none",
          color: isCompleted ? "#a1a1ad" : "",
        }}
      >
        {name}
      </Text>
      <TouchableOpacity onPress={handleDelete}>
        <AntDesign
          name="closecircle"
          size={20}
          color={!isCompleted ? "#ee6055" : "#a1a1ad"}
        />
      </TouchableOpacity>
    </Pressable>
  );
}
