import { Image } from "react-native";
import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./CommentStyle";
import { TouchableOpacity } from "react-native";

export const Comments = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../img/test.png")} style={styles.imgMap} />
        <View style={styles.commBlock}>
          <Image
            style={styles.avatarCom}
            source={require("../img/Ellipse.png")}
          />
          <View style={styles.blockCommUser}>
            <Text style={styles.blockCommUserText}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <Text style={styles.blockCommUserData}>
              09 червня, 2020 | 08:40
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.blockCommInputS}>
        <View style={styles.blockCommInput}>
          <TextInput style={styles.commInput} placeholder="Коментувати..." />
          <AntDesign
            style={styles.inputCommSub}
            name="arrowup"
            size={24}
            color="white"
            onPress={() => console.log("Click")}
          />
        </View>
      </View>
    </View>
  );
};
