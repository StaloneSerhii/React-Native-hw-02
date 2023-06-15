// Home.js
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./HomeStyled";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Публікації</Text>
        <Text style={styles.logout}>Exit</Text>
      </View>
      <View>
        <Image source={require("../img/avatar.png")} /><Text>
          Natalia Romanovna
        </Text>
        <Text>email@mail.com</Text>
      </View>
      <View>
        <Text>home</Text>
        <Text>+</Text>
        <Text>Pep</Text>
      </View>
    </View>
  );
};



