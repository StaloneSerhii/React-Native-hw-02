import { useState } from "react";
import { style } from "./LoginStyled";
import { useFonts } from "expo-font";
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const [focusInput, setFocusInput] = useState(false);
  const [secureText, setSecureTextEntry] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../font/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../font/Roboto-Regular.ttf"),
  });
  const navigator = useNavigation()

  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setFocusInput(false);
    Keyboard.dismiss();
  };
  const secureTexts = () => {
    if (secureText) {
      setSecureTextEntry(false);
      return false;
    }
    setSecureTextEntry(true);
    return true;
  };

  const enterSub = () => {
    setFocusInput(false);
    Keyboard.dismiss();
    console.log(inputValue);
    setInputValue(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={style.container}>
        <ImageBackground style={style.image} source={require("../img/BG.png")}>
          <View style={style.formBack}>
            <View style={style.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <View style={style.marginKeyBoard}>
                  <Text
                    style={{
                      ...style.textRegister,
                      fontFamily: "Roboto-Regular",
                    }}
                  >
                    Ввійти
                  </Text>
                  <TextInput
                    value={inputValue.email}
                    style={{
                      ...style.input,
                      fontFamily: "Roboto-Regular",
                    }}
                    onFocus={() => setFocusInput(true)}
                    placeholder="Електрона адреса"
                    onChangeText={(value) => {
                      setInputValue((prevState) => ({
                        ...prevState,
                        email: value,
                      }));
                    }}
                  />
                  <TextInput
                    value={inputValue.password}
                    style={{
                      ...style.input,
                      fontFamily: "Roboto-Regular",
                    }}
                    placeholder="Пароль"
                    secureTextEntry={secureText}
                    onFocus={() => setFocusInput(true)}
                    onChangeText={(value) => {
                      setInputValue((prevState) => ({
                        ...prevState,
                        password: value,
                      }));
                    }}
                  />
                  <TouchableOpacity
                    onPress={keyboardHide}
                    activeOpacity={0.5}
                    onShowUnderlay
                    style={style.openPass}
                  >
                    <Text
                      onPress={secureTexts}
                      style={{
                        ...style.Exit,
                        fontFamily: "Roboto-Regular",
                      }}
                    >
                      Показати
                    </Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
              <View
                style={{
                  ...style.focusInput,
                  display: focusInput ? "none" : "flex",
                }}
              >
                <TouchableOpacity
                  // onPress={enterSub}
                  activeOpacity={0.8}
                  style={style.btnRegister}
                  >
                  <Text
                  onPress={()=>{navigator.navigate("HomeScreen")}}
                    style={{
                      ...style.Register,
                      fontFamily: "Roboto-Regular",
                    }}
                  >
                    Ввійти
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={keyboardHide}
                  activeOpacity={0.5}
                  onShowUnderlay
                  style={style.btnExit}
                >
                  <Text
                  onPress={()=> navigator.navigate("Register")}
                    style={{
                      ...style.Exit,
                      fontFamily: "Roboto-Regular",
                    }}
                  >
                    Нема акаунт? Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
