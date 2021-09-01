import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RoundBtn } from "../components/RoundBtn";
import { Timer } from "./Timer/Timer";
import { PreTimerPage } from "./PreTimerPage";
import Icon from "react-native-vector-icons/Ionicons";
import { Focus } from "./Focus";

export const TimeChooser = ({ focusTitle }) => {
  // const [isStarted, setIsStarted] = useState(false);
  const defaultTime = 0;
  const [finalTime, setFinalTime] = useState(defaultTime);

  const defaultTimerHandler = (time) => {
    setFinalTime(time);
  };
  console.log("defaultTimerHandler received: ", finalTime);

  return (
    <View style={styles.container}>
      {finalTime ? (
        <Focus focusTitle={focusTitle} defaultTime={finalTime} />
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
