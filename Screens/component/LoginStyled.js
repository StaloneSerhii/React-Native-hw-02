import { StyleSheet } from "react-native";
import { loadFonts } from "./RegistrationScreen";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Regulat",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    // alignItems: "flex-end",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 6,
    color: "#000",
    fontSize: 20,
    padding: 8,
  },
  formBack: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#fff",
  },
  form: {},
  textRegister: {
    fontFamily: "Roboto-Regulat",
    textAlign: "center",
    paddingBottom: 33,
    paddingTop: 33,
    fontSize: 30,
    fontWeight: 500,
    color: "#212121",
  },
  btnRegister: {
    backgroundColor: "#ff6c00",
    height: 50,
    marginTop: 21,
    borderRadius: 100,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  Register: {
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
    color: "#fff",
    fontWeight: 400,
  },
  btnExit: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  Exit: {
    fontFamily: "Roboto-Regulat",
    fontSize: 16,
    fontWeight: 400,
    color: "#1B4371",
  },
  openPass: {
    fontFamily: "Roboto-Regulat",
    position: "absolute",
    top: 180,
    right: 30,
    fontSize: 16,
    fontWeight: 400,
  },
  focusInput: {
    paddingBottom: 67,
  },
});
