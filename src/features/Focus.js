import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RoundBtn } from "../components/RoundBtn";

export const Focus = ({ focusTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 33, color: "#fff" }}>Hello: Focus !</Text>
      <RoundBtn />
      <StatusBar style="inverted" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
