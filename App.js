import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Focus } from "./src/features/Focus";
import { AddFocus } from "./src/features/AddFocus";

export default function App() {
  const [focustTopic, setFocusTopic] = useState("null");
  const FocusTopicHandler = (value) => {
    setFocusTopic(value);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      {/* <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.linearGradient}
      > */}
      {focustTopic ? (
        <Focus focusTitle={focustTopic} />
      ) : (
        <AddFocus FocusTopicHandler={FocusTopicHandler} />
      )}
      {/* </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222f3e",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "21%",
  },
  linearGradient: {
    flex: 1,
  },
});
