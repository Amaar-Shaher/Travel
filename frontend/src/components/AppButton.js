import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <>
    {/* <TouchableOpacity
      style={ styles.button }
      onPress={onPress}
      >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity> */}

    <TouchableOpacity
      style={ styles2.button }
      onPress={onPress}
    >
      <Text style={styles2.text}>{title}</Text>
    </TouchableOpacity>

  </>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",

    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

const styles2 = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginLeft: 90,
    marginRight: 50,
    marginVertical: 30,
  },
  text: {
    fontSize:35,
    fontFamily: "serif",
    fontWeight: "bold",
  },
});

export default AppButton;
