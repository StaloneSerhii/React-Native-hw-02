// Home.js
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./CreatePostsStyle";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export const CreatePostsScreen = () => {
  const [data, setData] = useState({
    foto: "",
    name: "",
    location: "",
  });

  return (
    <ScrollView style={styles.bg}>
      <View>
        <View style={styles.content}>
          <View style={styles.upLoadFoto}>
            <Image source={require("../img/foto.png")} />
          </View>

          <Text style={styles.textFoto}>Завантажити фото</Text>
          <TextInput
            onChangeText={(value) => {
              setData((prevState) => ({
                ...prevState,
                name: value,
              }));
            }}
            style={styles.inputCreate}
            placeholder="Назва..."
          />
          <TextInput
            onChangeText={(value) => {
              setData((prevState) => ({
                ...prevState,
                location: value,
              }));
            }}
            style={styles.inputCreatePin}
            placeholder="Місцевість..."
          />
          <Image style={styles.pin} source={require("../img/map-pin.png")} />
          <TouchableOpacity style={styles.btnExit}>
            <Text style={styles.textBtn}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.delBtn}>
          <Image source={require("../img/trash-2.png")} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
