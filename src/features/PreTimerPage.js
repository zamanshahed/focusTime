import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { RoundBtn } from "../components/RoundBtn";
import Icon from "react-native-vector-icons/Feather";

export const PreTimerPage = ({ focusTitle, defaultTimerHandler }) => {
  const [manualValue, setManualValue] = useState(null);
  const ManualEntryHandler = (value) => {
    if (value < 60) {
      setManualValue(value);
    }
    if (value <= 0) {
      setManualValue(1);
    }
    if (value > 59) {
      setManualValue(59);
    }
  };

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#F8EFBA",
          paddingTop: "2%",
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

      {/* 
        Buttons starts here
       */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: "15%",
          //   alignItems: "center",
        }}
      >
        <View style={{ paddingHorizontal: 12 }}>
          <RoundBtn
            size={85}
            title="10 M"
            color="#7efff5"
            onPress={() => {
              defaultTimerHandler(10);
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 12 }}>
          <RoundBtn
            size={85}
            title="15 M"
            color="#fffa65"
            onPress={() => {
              defaultTimerHandler(15);
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 12 }}>
          <RoundBtn
            size={85}
            title="30 M"
            color="#ffbe76"
            onPress={() => {
              defaultTimerHandler(30);
            }}
          />
        </View>
      </View>
      {/* 
        Buttons ends here
       */}

      {/* 
        Manual entry icon logic 
    */}

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderColor: "#18dcff",
            width: 300,
            height: 45,
            borderRadius: 11,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 13,
            paddingHorizontal: 11,
            borderWidth: 2,
          }}
        >
          <TextInput
            style={{
              fontSize: 22,
              textAlign: "center",
              color: "#33d9b2",
            }}
            placeholderTextColor="#33d9b2"
            keyboardType="decimal-pad"
            autoCorrect={false}
            placeholder="Manually enter (minutes)"
            onChangeText={(value) => ManualEntryHandler(value)}
          />
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 99,
            borderWidth: 2,
            borderColor: "#18dcff",
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            console.log("manualValue: ", manualValue);
            defaultTimerHandler(manualValue);
          }}
        >
          <Icon name="check" size={35} color="#18dcff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
