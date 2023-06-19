import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { createStackNavigator } from "@react-navigation/stack";
import { Comments } from "./Screens/component/Profile/CommentsScreen";

const Stack = createStackNavigator();

export default function App() {
  const routing = useRoute(true);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
