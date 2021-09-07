import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
// import { Focus } from "./src/features/Focus";
import { AddFocus } from "./src/features/AddFocus";
import { TimeChooser } from "./src/features/TimeChooser";

export default function App() {
  const [focustTopic, setFocusTopic] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  const [stateManager, setStateManager] = useState(null);

  useEffect(() => {
    if (stateManager !== null) {
      setFocusHistory([...focusHistory, { focustTopic, stateManager }]);
    }
  }, [stateManager]);

  const FocusTopicHandler = (value) => {
    if (value === 0) {
      setStateManager(true);
    } else if (value === false) {
      setStateManager(false);
    } else {
      setFocusTopic(value);
    }
  };

  console.log("focusHistory: ", focusHistory);
  console.log("focustTopic: ", focustTopic);

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />

      {focustTopic ? (
        <TimeChooser
          focusTitle={focustTopic}
          FocusTopicHandler={FocusTopicHandler}
        />
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
    backgroundColor: "#3c6382",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "21%",
  },
  linearGradient: {
    flex: 1,
  },
});
