import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { RoundBtn } from "../components/RoundBtn";

export const AddFocus = () => {
  const [dataRec, setDataRec] = useState(null);

  const inputHandler = (data) => {
    setDataRec(data);
  };
  return (
    <View>
      <Text style={{ fontSize: 20, color: "#fff" }}>
        What would you like to focus ?
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
          style={styles.TextInputStyle}
          onChangeText={(value) => {
            inputHandler(value);
          }}
        />
        <RoundBtn
          title="+"
          size="45"
          onPress={() => {
            console.log(dataRec);
          }}
        />
        {/* <Button
          title="Submit"
          onPress={() => {
            console.log(dataRec);
          }}
        /> */}
      </View>
      {/* {dataRec && console.log(dataRec)} */}
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputStyle: {
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 5,
    width: "75%",
    fontSize: 20,
    paddingHorizontal: 7,
  },
});
