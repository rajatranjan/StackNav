import React from "react";
import { View, Text } from "react-native";

const VnPage = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is Visal Novel Page.</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
    </View>
  );
};

export default VnPage;
