import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    columnGap: 100,
    paddingBottom: 11,
    marginBottom: 32,
  },
  headerText: {
    fontSize: 17,
    fontWeight: 500,

  },
  logout: {
    position: "absolute",
    right: 16,
  },
  user: {
    flex: 2,
    flexDirection: "row",
    alignContent: "center",
    gap: 8,
    marginLeft: 16,
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
    paddingBottom:34,
    paddingTop: 9,
  },
  addPic: {
    backgroundColor: "#FF6C00",
    width: 70,
    color:"#fff",
    textAlign: "center",
    borderRadius: 20,
    fontSize: 30
  }
});

export default styles