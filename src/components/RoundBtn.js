// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const RoundBtn = ({
  title = "btn",
  size = 100,
  color = "#fff",
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderRadius: 200,
        borderColor: color,
        borderWidth: 2,
        width: size - 1,
        height: size - 1,
        // alignItems: "center",
        justifyContent: "center",
      }}
    >
      {title && (
        <Text
          style={{ color: color, textAlign: "center", fontSize: size / 1.5 }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});
