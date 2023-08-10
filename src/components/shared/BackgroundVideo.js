import React from 'react';
import Video from "react-native-video";
import { StyleSheet, Dimensions } from 'react-native';

import styles from './BackgroundVideoStyles';

const { height } = Dimensions.get("window");

const BackgroundVideo = ({ fileName }) => {
  return (
    <Video
      source={require(`../../assets/videos/videoplayback.mp4`)}
      style={styles.backgroundVideo}
      muted={true}
      repeat={true}
      resizeMode={"cover"}
      rate={1.0}
      ignoreSilentSwitch={"obey"}
    />
  );
};

export default BackgroundVideo;
