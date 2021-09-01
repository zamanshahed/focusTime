import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { RoundBtn } from "../components/RoundBtn";
import { Timer } from "./Timer/Timer";
import Icon from "react-native-vector-icons/Ionicons";

export const Focus = ({ focusTitle, defaultTime = 5 }) => {
  const [isStarted, setIsStarted] = useState(false);
  // const defaultTime = 10;
  // const [time, setTime] = useState(defaultTime);

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <TouchableOpacity
          onPress={() => {
            setIsStarted(!isStarted);
          }}
        >
          <Text style={styles.statusBtn}>
            {!isStarted ? (
              <Icon
                name="play-circle-outline"
                size={100}
                style={styles.statusBtn}
                color="#b8e994"
              />
            ) : (
              <Icon
                name="pause-circle-outline"
                size={100}
                style={styles.statusBtn}
                color="#e77f67"
              />
            )}
          </Text>
        </TouchableOpacity>
        <View style={styles.timerStyle}>
          <Timer minutes={defaultTime} isPaused={!isStarted} />
        </View>
      </View>
      <Text style={{ fontSize: 25, color: "#fff", paddingTop: 35 }}>
        Keep your Focus on:{"  "}
        <Text style={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {focusTitle}
        </Text>
        !
      </Text>

      <StatusBar style="inverted" />
    </View>
  );
};

const styles = StyleSheet.create({
  timerStyle: {
    paddingTop: "2%",
  },
  statusBtn: {
    justifyContent: "center",
    textAlign: "center",
    paddingLeft: 10,
  },
  timerContainer: {
    flexDirection: "column-reverse",
  },
  container: {
    flex: 1,
    // width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
