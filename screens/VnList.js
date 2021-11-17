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
      {/* <Button
        
        onPress={() =>
          navigation.navigate("VnPage", {
            itemId: 86,
            otherParam: "https://www.vimeo.com",
          })
        }
        title="go to vinDetail Pager"
      />
      <Button
        
        onPress={() =>
          navigation.navigate("VnPage", {
            itemId: 86,
            otherParam: "https://www.youtube.com",
          })
        }
        title="go to vinDetail Pager"
      /> */}
    </View>
  );
};

export default VnList;
