import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
function AppTextInput({ icon,  ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium} 
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white, 
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,

    marginLeft:30,
    marginRight: 15,
    // width : "100%",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
