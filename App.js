import React from "react";
import VnList from "./screens/VnList";
import VnPage from "./screens/VnPage";
import VideoPage from "./screens/VideoPage";
import VideoPage2 from "./screens/VideoPage2";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ animationEnabled: false, headerShown: false }}
      >
        <Stack.Screen name="VnList" component={VnList} />
        <Stack.Screen name="VnPage" component={VnPage} />
        <Stack.Screen name="VideoPage" component={VideoPage} />
        <Stack.Screen name="VideoPage2" component={VideoPage2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
