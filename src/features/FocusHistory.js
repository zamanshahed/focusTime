import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

const HistoryItems = ({ item, index }) => {
  let color = "";
  if (item.status === 1) {
    color = "#18dcff";
  } else if (item.status === 0) {
    color = "#e17055";
  } else {
    color = "#fff";
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
        <Text style={{ color: "#fff", fontSize: 22 }}>
          Previously Focused on:
        </Text>

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
