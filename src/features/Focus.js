import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RoundBtn } from "../components/RoundBtn";
import { Timer } from "./Timer/Timer";
import Icon from "react-native-vector-icons/Ionicons";

export const Focus = ({ focusTitle }) => {
  const [isStarted, setIsStarted] = useState(false);
  const defaultTime = 10;
  const [time, setTime] = useState(defaultTime);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setIsStarted(!isStarted);
        }}
      >
        <Text style={styles.statusBtn}>
          {!isStarted ? (
            <Icon
              name="play-circle"
              size={300}
              style={styles.statusBtn}
              color="rgba(60,179,113,0.5)"
            />
          ) : (
            <Icon
              name="pause-circle"
              size={300}
              style={styles.statusBtn}
              color="rgba(255,5,100,0.3)"
            />
          )}
        </Text>
        <View style={styles.timerStyle}>
          <Timer minutes={time} isPaused={!isStarted} />
        </View>
      </TouchableOpacity>
      <Text style={{ fontSize: 25, color: "#fff", paddingTop: 120 }}>
        Keep your Focus on:
        <Text style={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {focusTitle}
        </Text>
        !
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: 31,
        }}
      >
        <RoundBtn
          size={70}
          title="10 M"
          onPress={() => {
            setTime(10);
          }}
        />
        <RoundBtn
          size={70}
          title="15 M"
          onPress={() => {
            setTime(15);
          }}
        />
        <RoundBtn
          size={70}
          title="20 M"
          onPress={() => {
            setTime(20);
          }}
        />
      </View>
      <StatusBar style="inverted" />
    </View>
  );
};

const styles = StyleSheet.create({
  timerStyle: {
    paddingTop: "33%",
  },
  statusBtn: {
    position: "absolute",
    justifyContent: "center",
    fontWeight: "bold",
    textAlign: "center",
    paddingLeft: 10,
  },
});
