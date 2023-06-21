// Home.js
import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import styles from "./HomeStyled";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

export const ProfileSreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <ImageBackground
      source={require("../../img/BG.png")}
      style={styles.container}
    >
      <View style={styles.headerMap}>
        <View style={{ marginRight: 16, marginLeft: 16 }}>
          <View style={styles.userMap}>
            <Image
              style={styles.userImgMap}
              source={require("../../img/avatar.png")}
            />
            <View>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 500,
                  lineHeight: 35,
                  marginTop: 92,
                  textAlign: "center",
                }}
              >
                Natalia Romanovna
              </Text>
            </View>
          </View>
          <View style={styles.blockImg}>
            <FlatList
              data={posts}
              keyExtactor={(item, index) => index.toSctring()}
              renderItem={({ item }) => (
                <View>
                  <Image
                    source={{ uri: item.data.foto }}
                    style={styles.imgMap}
                  />
                  <Text style={{ fontWeight: 500, fontSize: 16 }}>
                    {item.data.name}
                  </Text>
                  <View style={{ ...styles.supBlockInf, flexDirection: "row" }}>
                    <TouchableOpacity style={{ flexDirection: "row" }}>
                      <EvilIcons
                        name="comment"
                        size={24}
                        color="#BDBDBD"
                        onPress={() => navigation.navigate("Коментарі")}
                      />
                      <Text style={styles.textCom}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ flexDirection: "row", marginRight: 50 }}
                    >
                      <AntDesign name="like2" size={24} color="#BDBDBD" />
                      <Text style={styles.textCom}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ flexDirection: "row" }}
                      onPress={() => {
                        navigation.navigate("Карта", { item });
                      }}
                    >
                      <EvilIcons name="location" size={24} color="#BDBDBD" />
                      <Text style={styles.textLoc}>{item.data.nameMarker}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
