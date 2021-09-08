import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FocusHistory } from "./src/features/FocusHistory";
import { AddFocus } from "./src/features/AddFocus";
import { TimeChooser } from "./src/features/TimeChooser";

export default function App() {
  const [focustTopic, setFocusTopic] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  // const [stateManager, setStateManager] = useState(null);

  const FocusHistoryHandler = (topic, status) => {
    setFocusHistory([
      ...focusHistory,
      { topic, status, key: JSON.stringify(Math.random()) },
    ]);
  };

  const FocusTopicHandler = (value) => {
    setFocusTopic(value);
  };
  console.log("Random key: ", JSON.stringify(Math.random()));
  console.log("focusHistory: ", focusHistory);
  console.log("focustTopic: ", focustTopic);

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />

      {focustTopic ? (
        //Timerchooser > Focus/PreTimerPage
        <TimeChooser
          focusTitle={focustTopic}
          FocusTopicHandler={FocusTopicHandler}
          OnFocusEnd={() => {
            FocusHistoryHandler(focustTopic, 1);
            console.log("FINISHED FOCUSING!!");
            setFocusTopic(false);
          }}
          OnStopTimer={() => {
            FocusHistoryHandler(focustTopic, 0);
            console.log("MANUALLY STOPPED!!");
            setFocusTopic(0);
          }}
        />
      ) : (
        <>
          <AddFocus FocusTopicHandler={FocusTopicHandler} />
          <FocusHistory
            focusHistory={focusHistory}
            onClear={() => {
              setFocusHistory([]);
            }}
          />
        </>
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
