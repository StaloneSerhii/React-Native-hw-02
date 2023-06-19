// Home.js
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./CreatePostsStyle";
import { ScrollView } from "react-native-gesture-handler";

export const CreatePostsScreen = ({ navigation }) => {
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
            value={data.name}
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
            value={data.location}
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
          {data.name ? (
            <TouchableOpacity
              style={styles.btnExit}
              onPress={() => {
                console.log("click");
              }}
            >
              <Text style={styles.textBtn}>Опублікувати</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              disabled
              style={{ ...styles.btnExit, backgroundColor: "#F6F6F6" }}
              onPress={() => {
                console.log("click");
              }}
            >
              <Text style={styles.textBtn}>Опублікувати</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.delBtn}
          onPress={() => setData({ foto: "", name: "", location: "" })}
        >
          <Image source={require("../img/trash-2.png")} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
