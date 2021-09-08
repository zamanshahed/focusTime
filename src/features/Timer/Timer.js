import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Vibration, Platform } from "react-native";
import { ProgressBar } from "react-native-paper";

const MinsToMillis = (mins) => {
  return mins * 60 * 1000;
};

const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Timer = ({ minutes = 15, isPaused = true, OnFocusEnd }) => {
  const [millis, setMillis] = useState(MinsToMillis(minutes));
  const [timerState, setTimerState] = useState(true);

  const formatMins = Math.floor(millis / 1000 / 60) % 60;
  const formatSec = Math.floor(millis / 1000) % 60;

  const finalTarget = MinsToMillis(minutes);

  const interval = React.useRef(null);

  const Vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => (Vibration.vibrate(), 1000));
      setTimeout(() => clearInterval(interval), 2000);
    } else {
      Vibration.vibrate(2 * 1000);
    }
  };
  useEffect(() => {
    if (!timerState) {
      onEnd();
    }
  }, [timerState]);

  const onEnd = () => {
    OnFocusEnd();
    console.log("onEnd triggered!");
    Vibrate();
  };

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        // finished counting !
        clearInterval(interval.current);
        setTimerState(false);
        return time;
      }
      // decrements by 1 sec!
      const timeLeft = time - 1000;

      // updating after deduction and setMillis
      return timeLeft;
    });
    // const tempo = formatMins / finalTarget;
    // setProgresNow(tempo);
  };

  useEffect(() => {
    if (isPaused) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      return;
    }

    if (millis === 0) {
      isPaused = false;
    }
    // TargetTimeHandler();
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <View style={{ width: 365 }}>
      <Text style={styles.titleText}>
        {formatTime(formatMins)}:{formatTime(formatSec)}
      </Text>
      <View>
        <ProgressBar
          progress={millis / finalTarget}
          color={"#33d9b2"}
          style={styles.ProgressBarStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 100,
    color: "#33d9b2",
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.95)",
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 20,
  },
  ProgressBarStyle: {
    height: 20,
    borderRadius: 90,
    marginVertical: 32,
    backgroundColor: "#84817a",
  },
});
