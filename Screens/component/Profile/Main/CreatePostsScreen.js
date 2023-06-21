// Home.js
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./CreatePostsStyle";
import { ScrollView } from "react-native-gesture-handler";
import { Camera } from "expo-camera";
import { ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Location from "expo-location";

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [data, setData] = useState({
    foto: "",
    name: "",
    location: "",
  });

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    // let location = await Location.getCurrentPositionAsync({});
    // const coords = {
    //   latitude: location.coords.latitude,
    //   longitude: location.coords.longitude,
    // };

    setData((prevState) => ({
      ...prevState,
      foto: photo.uri,
      // location: coords,
    }));
  };

  const sendFoto = () => {
    navigation.navigate("Мої Публікації", { data });
  };

  return (
    <ScrollView style={styles.bg}>
      <View>
        <View style={styles.content}>
          {data.foto ? (
            <ImageBackground
              source={{ uri: data.foto }}
              style={styles.photoFile}
            >
              <TouchableOpacity
                onPress={() => {
                  setData((prevState) => ({
                    ...prevState,
                    foto: "",
                  }));
                }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="camera" size={20} color="white" />
              </TouchableOpacity>
            </ImageBackground>
          ) : (
            <Camera style={styles.upLoadFoto} ref={setCamera}>
              <TouchableOpacity
                onPress={takePhoto}
                style={{
                  backgroundColor: "#fff",
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="camera" size={20} color="#BDBDBD" />
              </TouchableOpacity>
            </Camera>
          )}
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
          <Image style={styles.pin} source={require("../../img/map-pin.png")} />
          {data.foto && data.name ? (
            <TouchableOpacity
              style={styles.btnExit}
              onPress={() => {
                sendFoto();
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
          <Image source={require("../../img/trash-2.png")} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
