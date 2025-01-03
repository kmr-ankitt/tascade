import { AntDesign, Feather } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";

export default function layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping List",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, size }) => (
            <Feather name="clock" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="bulb1" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
