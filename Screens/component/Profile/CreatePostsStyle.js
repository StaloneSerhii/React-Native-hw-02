import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingTop: 12,
    paddingBottom: 12,
    color: "#212121",
    fontSize: 17,
    fontWeight: 500,
  },
  content: {
    marginLeft: 16,
    marginRight: 16,
  },
  bg: {
    backgroundColor: "#fff"
  },
  upLoadFoto: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    width: "100%",
    height: 240,
    marginTop: 32,
  },
  textFoto: {
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: 400,
    marginTop: 8,
    marginBottom:32,
  },
  btnExit: {
    backgroundColor: "#ff6c00",
    height: 50,
    marginTop: 21,
    borderRadius: 100,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  textBtn: {
    color: "#fff",
    fontSize: 16,
  },
  inputCreate: {
    height: 50,
    fontSize: 16,
marginBottom: 16,
borderBottomWidth: 1,
borderBottomColor: "#E5E5E5",
  }
});

export default styles