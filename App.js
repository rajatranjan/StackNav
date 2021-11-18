import React from "react";
import VnList from "./screens/VnList";
import VnPage from "./screens/VnPage";
import VideoPage from "./screens/VideoPage";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
