import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Shopping List" }} />
    </Stack>
  );
}
