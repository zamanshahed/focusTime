import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Timer } from "./Timer/Timer";
import Icon from "react-native-vector-icons/Ionicons";
import IconNow from "react-native-vector-icons/EvilIcons";

import { useKeepAwake } from "expo-keep-awake";

export const Focus = ({ focusTitle, defaultTime = 5, FocusTopicHandler }) => {
  const [isStarted, setIsStarted] = useState(false);

  useKeepAwake();
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
                name="play-sharp"
                size={75}
                style={[
                  styles.statusBtn,
                  styles.roundedBorder,
                  { borderColor: "red" },
                ]}
                color="#18dcff"
              />
            ) : (
              <Icon
                name="pause-sharp"
                size={75}
                style={styles.statusBtn}
                color="#e77f67"
              />
            )}
          </Text>
        </TouchableOpacity>
        <View style={styles.timerStyle}>
          <Timer
            FocusTopicHandler={FocusTopicHandler}
            minutes={defaultTime}
            isPaused={!isStarted}
          />
        </View>
      </View>

      {/* 
        UI Message
      */}

      {!isStarted && (
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 25,
              color: "#fff",
              paddingTop: 35,
              textAlign: "center",
            }}
          >
            Let's start{" "}
            <Text style={{ fontWeight: "bold", textTransform: "capitalize" }}>
              {focusTitle}
            </Text>
            {" !"}
          </Text>
        </View>
      )}

      {isStarted && (
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 25,
              color: "#fff",
              paddingTop: 35,
              textAlign: "center",
            }}
          >
            Leave the phone, Keep your Focus on:{" "}
            <Text style={{ fontWeight: "bold", textTransform: "capitalize" }}>
              {focusTitle}
            </Text>
            {" !"}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={[
          styles.roundedBorder,
          { borderColor: "#e77f67", marginVertical: 15 },
        ]}
        onPress={() => {
          FocusTopicHandler(null);
        }}
      >
        <IconNow name="close" size={45} color="#e77f67" />
      </TouchableOpacity>

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
  roundedBorder: {
    borderRadius: 99,
    borderWidth: 2,
    height: 56,
    width: 56,
    justifyContent: "center",
    alignItems: "center",
  },
});
