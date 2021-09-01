import React from "react";
import { Text, View } from "react-native";
import { RoundBtn } from "../components/RoundBtn";

export const PreTimerPage = ({ focusTitle, defaultTimerHandler }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          color: "#F8EFBA",
          paddingTop: "50%",
          textAlign: "center",
          fontWeight: "500",
          textShadowColor: "rgba(0, 0, 0, 0.95)",
          textShadowOffset: { width: -5, height: 5 },
          textShadowRadius: 20,
        }}
      >
        How long you want to focus on{" "}
        <Text
          style={{
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: 35,
            color: "#33d9b2",
          }}
        >
          {focusTitle}
        </Text>
        {" ?"}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: "25%",
          //   alignItems: "center",
        }}
      >
        <View style={{ paddingHorizontal: 12 }}>
          <RoundBtn
            size={105}
            title="10 M"
            color="#7efff5"
            onPress={() => {
              defaultTimerHandler(10);
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 12 }}>
          <RoundBtn
            size={105}
            title="15 M"
            color="#fffa65"
            onPress={() => {
              defaultTimerHandler(15);
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 12 }}>
          <RoundBtn
            size={105}
            title="20 M"
            color="#ffbe76"
            onPress={() => {
              defaultTimerHandler(20);
            }}
          />
        </View>
      </View>
    </View>
  );
};
