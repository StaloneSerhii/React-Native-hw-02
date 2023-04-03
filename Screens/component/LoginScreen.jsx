import { useState } from "react";
import { style } from "./LoginStyled";
import AppLoading from "expo-app-loading";
import { loadFonts } from "./RegistrationScreen";
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
  password: "",
};

export const LoginScreen = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const [focusInput, setFocusInput] = useState(false);
  const [secureText, setSecureTextEntry] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const keyboardHide = () => {
    setFocusInput(false);
    Keyboard.dismiss();
  };
  const secureTexts = () => {
    if (secureText) {
      console.log("click false");
      setSecureTextEntry(false);
      return false;
    }
    console.log("click true");
    setSecureTextEntry(true);
    return true;
  };

  const enterSub = () => {
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
          <View style={style.formBack}>
            <View style={style.form}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <View style={style.marginKeyBoard}>
                  <Text style={style.textRegister}>Ввійти</Text>
                  <TextInput
                    value={inputValue.email}
                    style={style.input}
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
                    style={style.input}
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
                    <Text onPress={secureTexts} style={style.Exit}>
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
                  onPress={enterSub}
                  activeOpacity={0.8}
                  style={style.btnRegister}
                >
                  <Text style={style.Register}>Ввійти</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={keyboardHide}
                  activeOpacity={0.5}
                  onShowUnderlay
                  style={style.btnExit}
                >
                  <Text style={style.Exit}>Нема акаунт? Зареєструватися</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
