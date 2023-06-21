import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerMap: {
    marginTop: 147,
    backgroundColor: "#fff",
    flex: 1,
  },
  header: {
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  headerText: {
    fontSize: 17,
    fontWeight: 500,
  },

  user: {
    flexDirection: "row",
    alignContent: "center",
    gap: 8,
    marginBottom: 32,
  },
  nameUser: {
    fontSize: 13,
    fontWeight: 700,
    color: "#212121",
  },
  downScreen: {
    borderTopWidth: 1,
    justifyContent: "center",
    borderTopColor: "#E5E5E5",
    flexDirection: "row",
    gap: 31,
    paddingBottom: 34,
    paddingTop: 9,
  },
  addPic: {
    backgroundColor: "#FF6C00",
    width: 70,
    color: "#fff",
    textAlign: "center",
    borderRadius: 20,
    fontSize: 30,
  },
  blockImg: {
    flexDirection: "column",
  },
  supBlockInf: {
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  textCom: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  textLoc: {
    color: "#212121",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  imgMap: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
  userImg: {
    width: 60,
    borderRadius: 8,
  },
  userImgMap: {
    position: "absolute",
    top: -60,
    left: "30%",
    width: 120,
    height: 120,
  },
  userMap: {
    justifyContent: "center",
    marginBottom: 32,
  },
});

export default styles;
