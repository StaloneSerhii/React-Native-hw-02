import { useState } from "react";
import { style } from "./RegisterScreenStyle";
import Svg, { Circle, Path } from "react-native-svg";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
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

const initialState = {
  email: "",
  login: "",
  password: "",
};

export const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regulat": require("./font/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./font/Roboto-Bold.ttf"),
  });
};

export const RegistrationScreen = () => {
  const [focusInput, setFocusInput] = useState(false);
  const [secureText, setSecureTextEntry] = useState(true);
  const [inputValue, setInputValue] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
  const secureTexts = () => {
    if (secureText) {
      setSecureTextEntry(false);
      return false;
    }
    setSecureTextEntry(true);
    return true;
  };
  const keyboardHide = () => {
    setFocusInput(false);
    Keyboard.dismiss();
  };
  const registerSub = () => {
    setFocusInput(false);
    Keyboard.dismiss();
    console.log(inputValue);
    setInputValue(initialState);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={style.container}>
        <ImageBackground style={style.image} source={require("./BG.png")}>
          <View style={style.avatar}>
            <TouchableOpacity style={style.addAvatar} activeOpacity={0.8}>
              <Svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Circle
                  cx="12.5"
                  cy="12.5"
                  r="12"
                  fill="white"
                  stroke="#FF6C00"
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                  fill="#FF6C00"
                />
              </Svg>
            </TouchableOpacity>
          </View>
          <View style={style.formBack}>
            <View style={style.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <View style={style.marginKeyBoard}>
                  <Text style={style.textRegister}>Реєстрація</Text>
                  <TextInput
                    style={style.input}
                    value={inputValue.login}
                    placeholder="Логін"
                    onFocus={() => setFocusInput(true)}
                    onChangeText={(value) => {
                      setInputValue((prevState) => ({
                        ...prevState,
                        login: value,
                      }));
                    }}
                  />
                  <TextInput
                    style={style.input}
                    value={inputValue.email}
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
                    style={style.input}
                    value={inputValue.password}
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
                    onPress={secureTexts}
                    activeOpacity={0.5}
                    onShowUnderlay
                    style={style.openPass}
                  >
                    <Text style={style.Exit}>Показати</Text>
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
                  onPress={registerSub}
                  activeOpacity={0.8}
                  style={style.btnRegister}
                >
                  <Text style={style.Register}>Зареєструвається</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={keyboardHide}
                  activeOpacity={0.5}
                  onShowUnderlay
                  style={style.btnExit}
                >
                  <Text
                    onPress={() => {
                      setFocusInput(false);
                    }}
                    style={style.Exit}
                  >
                    Вже є акаунт? Увійти
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
