import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VnList = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is List of Visal Novel Page.</Text>
      <Button
        onPress={() =>
          navigation.navigate("VnPage", {
            itemId: 86,
            otherParam: "anything you want here",
          })
        }
        title="go to vinDetail Pager"
      />
    </View>
  );
};

export default VnList;
