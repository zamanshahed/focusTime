import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PreTimerPage } from "./PreTimerPage";
import { Focus } from "./Focus";

export const TimeChooser = ({ focusTitle, OnFocusEnd, OnStopTimer }) => {
  // const [isStarted, setIsStarted] = useState(false);
  const defaultTime = 0;
  const [finalTime, setFinalTime] = useState(defaultTime);

  const defaultTimerHandler = (time) => {
    setFinalTime(time);
  };
  // console.log("defaultTimerHandler received: ", finalTime);

  return (
    <View style={styles.container}>
      {finalTime ? (
        <Focus
          focusTitle={focusTitle}
          defaultTime={finalTime}
          OnFocusEnd={OnFocusEnd}
          OnStopTimer={OnStopTimer}
        />
      ) : (
        <PreTimerPage
          focusTitle={focusTitle}
          defaultTimerHandler={defaultTimerHandler}
        />
      )}

      <StatusBar style="inverted" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "75%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
