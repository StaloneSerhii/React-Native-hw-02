// Home.js
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./CreatePostsStyle";
import { useNavigation } from "@react-navigation/native";


export const CreatePostsScreen = () => {
    const navigator = useNavigation()
    return (
        <View style={styles.bg}>
            <View>
                <Text style={styles.header}>Створити Публікацію</Text>
                <View style={styles.content}>
                    <View style={styles.upLoadFoto}>
                        <Image source={require("../img/foto.png")} />

                    </View>

                    <Text style={styles.textFoto}>
                        Завантажити фото
                    </Text>
                    <TextInput style={styles.inputCreate} placeholder="Назва..." />
                    <TextInput style={styles.inputCreate} placeholder="Місцевість..." />
                    <TouchableOpacity style={styles.btnExit}><Text style={styles.textBtn}>Опублікувати</Text></TouchableOpacity>
                </View>
            </View>

        </View>
    );
};



