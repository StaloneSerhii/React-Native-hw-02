import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "./Screens/component/Auth/LoginScreen";
import { RegistrationScreen } from "./Screens/component/Auth/RegistrationScreen";
import {HomeScreen} from "./Screens/component/Profile/HomeScreen"
import { StyleSheet } from "react-native";
import { CreatePostsScreen } from './Screens/component/Profile/CreatePostsScreen';

const MainStack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="HomeScreen">
        {/* <View style={styles.container}> */}
          <MainStack.Screen name="Register" component={RegistrationScreen}/>
          <MainStack.Screen name="Login" component={LoginScreen}/>
          <MainStack.Screen name="HomeScreen" component={HomeScreen}/>
          <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen}/>
          {/* <StatusBar style="auto" /> */}
        {/* </View> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
