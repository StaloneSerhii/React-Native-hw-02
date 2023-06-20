import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { ProfileSreen } from "./Screens/component/Profile/ProfileSreen";
import { CreatePostsScreen } from "./Screens/component/Profile/CreatePostsScreen";
import { HomeScreen } from "./Screens/component/Profile/HomeScreen";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const MaintTab = createBottomTabNavigator();

export function Home() {
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
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={({ route, navigation }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View style={styles.add}>
                <Ionicons name="add" size={24} color="white" />
              </View>
            );
          },
          headerLeft: ({ focused, size, color }) => (
            <View style={styles.goSvgHome}>
              <AntDesign
                name="arrowleft"
                size={24}
                color="#212121"
                onPress={() => navigation.navigate("Публікації")}
              />
            </View>
          ),
          tabBarStyle: { display: "none" }, // Приховати наступні екрани
        })}
      />
      <MaintTab.Screen
        name="Мої Публікації"
        component={ProfileSreen}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View style={styles.user}>
                <Feather name="user" size={24} color="#212121" />
              </View>
            );
          },
          headerRight: () => (
            <TouchableOpacity style={styles.out}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
    </MaintTab.Navigator>
  );
}

const styles = StyleSheet.create({
  goSvgHome: { marginLeft: 16 },
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
