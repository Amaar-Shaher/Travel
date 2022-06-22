import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
// import { data } from "../common/Data";

export default function Categoryitem({ value, index, active, setChoosenValue }) {
  const [Prees, setPrees] = useState([]);
    const handlePress = () =>{
            setChoosenValue(value)
    }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 10 },
          active
            ? { backgroundColor: "rgba(5,5,5,.2)" }
            : { backgroundColor: "white" },
        ]}
      >
        <View>
          <Image
            source={require("../images/money.png")}
            style={styles.imageStyle}
          />
        </View>
        <Text style={styles.header}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginBottom : -40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth : 1,
    borderColor : "#425E6F",
  },
  header: {
    fontWeight: "bold",
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
});
