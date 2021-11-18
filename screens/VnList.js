import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VnList = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is List of Visal Novel Page.</Text>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Button
          onPress={() =>
            navigation.navigate("VnPage", {
              itemId: 86,
              otherParam: "https://www.thatmate.com/KnowYourBody/index.html",
            })
          }
          title="New RenJS Visual Novel"
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Button
          onPress={() =>
            navigation.navigate("VnPage", {
              itemId: 86,
              otherParam:
                "https://www.thatmate.com/RenJSQuickstart_V2.0/index.html",
            })
          }
          title="RenJS default guide."
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Button
          onPress={() =>
            navigation.navigate("VnPage", {
              itemId: 86,
              otherParam:
                "https://www.thatmate.com/RenJSQuickstart_V2/index.html",
            })
          }
          title="Old RenJS Visual Novel"
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Button
          onPress={() =>
            navigation.navigate("VnPage", {
              itemId: 86,

              otherParam:
                "https://www.thatmate.com/KnowYourBody_copy_1/index.html",
            })
          }
          title="New RenJS Visual Novel copy"
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Button
          onPress={() =>
            navigation.navigate("VideoPage", {
              itemId: 86,
              otherParam: "https://www.vimeo.com",
            })
          }
          title="Video from DB using RN Video"
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Button
          onPress={() =>
            navigation.navigate("VideoPage2", {
              itemId: 86,
              otherParam: "https://www.vimeo.com",
            })
          }
          title="Video from Vimeo using Iframe"
        />
      </View>
    </View>
  );
};

export default VnList;
