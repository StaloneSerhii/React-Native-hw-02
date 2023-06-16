import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";

import { LoginScreen } from "./Screens/component/Auth/LoginScreen";
import { RegistrationScreen } from "./Screens/component/Auth/RegistrationScreen";
import { HomeScreen } from "./Screens/component/Profile/HomeScreen";
import { CreatePostsScreen } from "./Screens/component/Profile/CreatePostsScreen";
import { MapScreen } from "./Screens/component/Profile/MapScreen";
import { View } from "react-native";

const AuthNavigator = createStackNavigator();
const MaintTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthNavigator.Navigator>
        <AuthNavigator.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthNavigator.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthNavigator.Navigator>
    );
  }
  return (
    <MaintTab.Navigator
      initialRouteName={"Публікації"}
      screenOptions={styles.container}
      tabBarOptions={{ showLabel: false }}
    >
      <MaintTab.Screen
        name="Публікації"
        component={HomeScreen}
        options={{
          headerTitleAlign: "center",
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View style={styles.home}>
                <Feather name="grid" size={24} color="#212121" />
              </View>
            );
          },
          headerRight: () => (
            <TouchableOpacity style={styles.out}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <MaintTab.Screen
        name="Створити публцікацію"
        component={CreatePostsScreen}
        options={{
          tabBarVisible: true,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View style={styles.add}>
                <Ionicons name="add" size={24} color="white" />
              </View>
            );
          },
        }}
      />
      <MaintTab.Screen
        name="Мої Публікації"
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View style={styles.user}>
                <Feather name="user" size={24} color="#212121" />
              </View>
            );
          },
        }}
      />
    </MaintTab.Navigator>
  );
};

const styles = StyleSheet.create({
  out: { marginRight: 10 },
  add: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 31,
    marginLeft: 31,
  },
  user: {
    width: 40,
    height: 40,
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  home: {
    width: 40,
    height: 40,
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    headerStyle: {
      height: 83,
      borderBottomWidth: 1,
      borderColor: "#BDBDBD",
    },
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontSize: 17,
      color: "#212121",
      fontFamily: "Roboto-Regular",
    },

    tabBarStyle: {
      height: 83,
      paddingTop: 9,
      paddingBottom: 34,
    },
    tabBarInactiveTintColor: "#212121",
  },
});