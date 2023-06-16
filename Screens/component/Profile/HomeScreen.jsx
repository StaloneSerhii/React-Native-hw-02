// Home.js
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./HomeStyled";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.user}>
        <Image source={require("../img/avatar.png")} />
        <View>
          <Text>Natalia Romanovna</Text>
          <Text>email@mail.com</Text>
        </View>
      </View>
    </View>
  );
};
