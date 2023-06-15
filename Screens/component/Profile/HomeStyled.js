import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    header:{
      flex: 2,
      flexDirection: "row",
      justifyContent: "center",
      borderBottomWidth: 2,
      borderBottomColor: "#000"
    },
    headerText:{
      fontSize: 17,
      fontWeight: 500,
    },
    logout:{
    marginLeft: 1
    }
  });

  export default styles