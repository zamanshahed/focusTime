import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FocusHistory } from "./src/features/FocusHistory";
import { AddFocus } from "./src/features/AddFocus";
import { TimeChooser } from "./src/features/TimeChooser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react/cjs/react.development";

export default function App() {
  const [focustTopic, setFocusTopic] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  // const [stateManager, setStateManager] = useState(null);

  const FocusHistoryHandler = (topic, status) => {
    setFocusHistory([
      ...focusHistory,
      { topic, status, key: JSON.stringify(Math.random()) },
    ]);
  };

  const FocusTopicHandler = (value) => {
    setFocusTopic(value);
  };

  const SaveFocusHistory = async () => {
    try {
      const jsonValue = JSON.stringify(focusHistory);
      await AsyncStorage.setItem("focusHistory", jsonValue);
      // await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (error) {
      // console.log("error on SaveFocusHistory: ", error);
    }
  };

  const ClearFocusHistory = async () => {
    try {
      await AsyncStorage.removeItem("focusHistory");
      // await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (error) {
      // console.log("error on ClearFocusHistory: ", error);
    }
  };

  const LoadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      // const History = await AsyncStorage.getItem("focusHistory");

      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (error) {
      // console.log("error on Load FocusHistory: ", error);
    }
  };

  useEffect(
    () => {
      LoadFocusHistory();
    },
    [
      // empty means run on mount/start
    ]
  );

  useEffect(() => {
    if (focusHistory.length) {
      SaveFocusHistory();
    }
  }, [focusHistory]);

  // console.log("Random key: ", JSON.stringify(Math.random()));
  // console.log("focusHistory: ", focusHistory);
  // console.log("focusHistory length: ", focusHistory.length);

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />

      {focustTopic ? (
        //Timerchooser > Focus/PreTimerPage
        <TimeChooser
          focusTitle={focustTopic}
          FocusTopicHandler={FocusTopicHandler}
          OnFocusEnd={() => {
            FocusHistoryHandler(focustTopic, 1);
            // console.log("FINISHED FOCUSING!!");
            setFocusTopic(false);
          }}
          OnStopTimer={() => {
            FocusHistoryHandler(focustTopic, 0);
            // console.log("MANUALLY STOPPED!!");
            setFocusTopic(0);
          }}
        />
      ) : (
        <>
          <AddFocus FocusTopicHandler={FocusTopicHandler} />
          {focusHistory.length ? (
            <FocusHistory
              focusHistory={focusHistory}
              onClear={() => {
                setFocusHistory([]);
                ClearFocusHistory();
              }}
            />
          ) : (
            <></>
          )}
        </>
      )}
      {/* </LinearGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3c6382",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "11%",
  },
  linearGradient: {
    flex: 1,
  },
});
