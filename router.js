import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./Screens/component/Auth/LoginScreen";
import { RegistrationScreen } from "./Screens/component/Auth/RegistrationScreen";
import { Comments } from "./Screens/component/Profile/subScreen/CommentsScreen";
import { MapScreen } from "./Screens/component/Profile/subScreen/MapSreen";
import { Home } from "./Screens/component/Profile/Home";

const AuthNavigator = createStackNavigator();

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
  } else {
    return (
      <AuthNavigator.Navigator>
        <AuthNavigator.Screen
          options={{ headerShown: false }}
          name="TabNavigate"
          component={Home}
        />
        <AuthNavigator.Screen
          options={{ headerTitleAlign: "center" }}
          name="Коментарі"
          component={Comments}
        />
        <AuthNavigator.Screen
          options={{ headerTitleAlign: "center" }}
          name="Карта"
          component={MapScreen}
        />
      </AuthNavigator.Navigator>
    );
  }
};
