import { useEffect, useState } from "react";
import { style } from "./LoginStyled";
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

export const LoginScreen = () => {
  const [focusInput, setFocusInput] = useState(false);
  const [secureText, setSecureTextEntry] = useState(true);
  // const [keyboardStatus, setKeyboardStatus] = useState(false);
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

  //   useEffect(() => {
  //     const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
  //       setKeyboardStatus(true);
  //     });

  //     const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
  //       setKeyboardStatus(false);
  //     });
  //   });
  // console.log(keyboardStatus);
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
                    style={style.input}
                    onFocus={() => setFocusInput(true)}
                    placeholder="Електрона адреса"
                  />
                  <TextInput
                    style={style.input}
                    placeholder="Пароль"
                    secureTextEntry={secureText}
                    onFocus={() => setFocusInput(true)}
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
                  onPress={keyboardHide}
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
