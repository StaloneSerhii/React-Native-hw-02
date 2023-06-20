// Home.js
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./HomeStyled";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Image style={styles.userImg} source={require("../img/avatar.png")} />
          <View>
            <Text style={{ fontSize: 13, fontWeight: 700 }}>
              Natalia Romanovna
            </Text>
            <Text style={{ fontSize: 13, color: "rgba(33, 33, 33, 0.8)" }}>
              email@mail.com
            </Text>
          </View>
        </View>
        <View style={styles.blockImg}>
          <Image source={require("../img/test.png")} style={styles.imgMap} />
          <Text style={{ fontWeight: 500, fontSize: 16 }}>Ліс</Text>
          <View style={styles.supBlockInf}>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <EvilIcons
                name="comment"
                size={24}
                color="#BDBDBD"
                onPress={() => navigation.navigate("Коментарі")}
              />
              <Text style={styles.textCom}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <EvilIcons name="location" size={24} color="#BDBDBD" />
              <Text style={styles.textLoc}>Ternopil Region, Ukraine</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
