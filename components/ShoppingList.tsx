import { AntDesign, Feather } from "@expo/vector-icons";
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
        borderColor: "#1a759f",
        borderBottomWidth: 2,
        paddingBlock: 20,
        paddingHorizontal: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: isCompleted ? "#D3D3D3" : "",
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
    </View>
  );
}
