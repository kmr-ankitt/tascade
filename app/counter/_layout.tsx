import { MaterialIcons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => (
            <Link href={"/counter/history"} asChild>
              <Pressable hitSlop={20}>
                <MaterialIcons name="history" size={30} color={"grey"} />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
