import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import * as ScreenOrientation from "expo-screen-orientation";

const GOOGLE = "https://www.google.com/";

const VnPage = ({ route, navigation }) => {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }
  const { itemId, otherParam } = route.params;
  const window = useWindowDimensions();
  const h = window.height;
  const w = window.width;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          borderColor: "red",
          // marginRight: 300,
          width: window.width,
          height: window.height,
          // rotation: 90,
          flex: 1,
        }}
      >
        <WebView
          source={{ uri: otherParam }}
          // source={{ uri: GOOGLE }}
          onLoad={() => changeScreenOrientation()}
          // onLoad={console.log("onLoad", h, w)}
          scalesPageToFit={true}
        />
      </View>
    </View>
  );
};

export default VnPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
