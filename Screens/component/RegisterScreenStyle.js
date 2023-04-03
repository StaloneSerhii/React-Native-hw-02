import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Regulat",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  avatar: {
    backgroundColor: "#234522",
    borderRadius: 16,
    height: 120,
    width: 120,
    marginRight: "auto",
    marginLeft: "auto",
    bottom: -60,
    zIndex: 1,
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
    // fontFamily: "Roboto-Regulat",
  },
  formBack: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: "#fff",
  },
  textRegister: {
    // fontFamily: "Roboto-Regulat",
    paddingTop: 80,
    textAlign: "center",
    marginBottom: 33,
    fontSize: 30,

    color: "#212121",
    letterSpacing: 0.01,
  },
  btnRegister: {
    backgroundColor: "#ff6c00",
    height: 50,
    marginTop: 8,
    borderRadius: 100,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 35,
    // fontFamily: "Roboto-Regulat",
  },
  Register: {
    fontSize: 16,
    color: "#fff",
    // fontFamily: "Roboto-Regulat",
  },
  btnExit: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    // fontFamily: "Roboto-Regulat",
  },
  Exit: {
    fontSize: 16,
    color: "#1B4371",
    marginBottom: 66,
    // fontFamily: "Roboto-Regulat",
  },
  openPass: {
    position: "absolute",
    top: 290,
    right: 30,
    fontSize: 16,
    // fontFamily: "Roboto-Regulat",
  },
  addAvatar: {
    position: "absolute",
    bottom: 14,
    right: -14,
  },
});
