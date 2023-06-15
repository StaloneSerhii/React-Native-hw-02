// Home.js
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./HomeStyled";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigator = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>
        <Image style={styles.logout} source={require("../img/log-out.png")} />
      </View>
      <View style={styles.user}>
        <Image source={require("../img/avatar.png")} />
        <View>
          <Text>
            Natalia Romanovna
          </Text>
          <Text>email@mail.com</Text>
        </View>
      </View>
      <View style={styles.downScreen}>
        <Image source={require("../img/grid.png")} />
        <Text  style={styles.addPic} onPress={()=>{navigator.navigate("CreatePostsScreen")}}>+</Text>
        <Image source={require("../img/user.png")} />
      </View>
    </View>
  );
};



