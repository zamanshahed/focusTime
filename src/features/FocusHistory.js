import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

const HistoryItems = ({ item, index }) => {
  let color = "";
  if (item.status) {
    color = "green";
  } else {
    color = "red";
  }
  return (
    <Text style={{ textTransform: "capitalize", fontSize: 20, color: color }}>
      {item.topic}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const ClearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Previously Focused on:</Text>

        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1, alignItems: "center" }}
          data={focusHistory}
          renderItem={HistoryItems}
        />
      </SafeAreaView>
    </>
  );
};
