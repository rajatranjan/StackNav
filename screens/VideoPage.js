import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Video from "react-native-video";
import { Vimeo } from "react-native-vimeo-iframe";

const VideoPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Vimeo
          videoId={"76979871"}
          onReady={() => console.log("Video is ready")}
          onPlay={() => console.log("Video is playing")}
          onPlayProgress={(data) => console.log("Video progress data:", data)}
          onFinish={() => console.log("Video is finished")}
          loop={false}
          autoPlay={false}
          controls={true}
          speed={false}
        />
        <Vimeo
          videoId={"76979871"}
          onReady={() => console.log("Video is ready")}
          onPlay={() => console.log("Video is playing")}
          onPlayProgress={(data) => console.log("Video progress data:", data)}
          onFinish={() => console.log("Video is finished")}
          loop={true}
          autoPlay={false}
          controls={false}
          speed={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default VideoPage;

// import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});
