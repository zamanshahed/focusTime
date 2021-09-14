import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { RoundBtn } from "../components/RoundBtn";
import Icon from "react-native-vector-icons/Ionicons";

export const AddFocus = ({ FocusTopicHandler }) => {
  const [dataRec, setDataRec] = useState(null);

  const inputHandler = (data) => {
    setDataRec(data);
  };
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/timer.png")}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          fontSize: 66,
          paddingBottom: "5%",
          textShadowColor: "rgba(0, 0, 0, 0.95)",
          textShadowOffset: { width: -5, height: 5 },
          textShadowRadius: 20,
        }}
      >
        <Text style={{ color: "#34e7e4" }}>Focus</Text>
        <Text style={{ color: "#ffeaa7" }}>Time!</Text>
      </Text>
      <Text style={{ fontSize: 25, color: "#32ff7e", textAlign: "center" }}>
        What would you like to focus on ?
      </Text>
      <View
        style={{
          paddingVertical: 11,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          // autoCapitalize
          autoCorrect
          style={styles.TextInputStyle}
          onChangeText={(value) => {
            inputHandler(value);
          }}
        />

        <TouchableOpacity
          style={[styles.roundedBorder, { borderColor: "#18dcff" }]}
          onPress={() => {
            // console.log(dataRec);
            FocusTopicHandler(dataRec);
          }}
        >
          <Icon
            name="add"
            size={40}
            color="#18dcff"
            style={{ justifyContent: "center", alignItems: "center" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputStyle: {
    borderWidth: 2,
    height: 45,
    borderRadius: 5,
    width: "75%",
    fontSize: 18,
    paddingHorizontal: 7,
    textAlign: "center",
    color: "#fff",
    borderColor: "#18dcff",
  },
  roundedBorder: {
    borderRadius: 99,
    borderWidth: 2,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
    paddingTop: -40,
  },
});
