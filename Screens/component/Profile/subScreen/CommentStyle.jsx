import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "space-between", // Додайте це для прив'язки блоків до верхньої та нижньої частини
  },
  header: {
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  avatarCom: {
    width: 28,
    marginRight: 16,
  },
  commBlock: {
    marginTop: 32,
    flexDirection: "row",
  },
  blockCommUser: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    width: 299,
    padding: 16,
  },
  blockCommUserText: {
    lineHeight: 18,
    fontSize: 13,
    color: "#212121",
  },
  blockCommUserData: {
    textAlign: "right",
    fontSize: 10,
    color: "#BDBDBD",
    marginTop: 8,
  },
  blockCommInput: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    marginTop: 31,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  blockCommInputS: {
    justifyContent: "flex-end",
  },
  inputCommSub: {
    position: "absolute",
    right: 8,
    top: 8,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 4,
  },
  commInput: {
    height: 50,
    fontSize: 16,
    marginLeft: 16,
    position: "relative",
  },
});

export default styles;
