import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const MinsToMillis = (mins) => {
  return mins * 60 * 1000;
};

const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Timer = ({ minutes = 15, isPaused = true }) => {
  const [millis, setMillis] = useState(MinsToMillis(minutes));

  const formatMins = Math.floor(millis / 1000 / 60) % 60;
  const formatSec = Math.floor(millis / 1000) % 60;

  const interval = React.useRef(null);

  //   const TargetTimeHandler = (tempTime) => {
  //     const tempo = MinsToMillis(tempTime);
  //     setMillis(tempo);
  //   };

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        // finished counting !
        return time;
      }
      // decrements by 1 sec!
      const timeLeft = time - 1000;

      // updating after deduction and setMillis
      return timeLeft;
    });
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <View>
      <Text style={styles.titleText}>
        {formatTime(formatMins)}:{formatTime(formatSec)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 90,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.95)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 20,
  },
});
