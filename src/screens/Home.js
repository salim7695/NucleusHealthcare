import React from 'react';
import styled from "styled-components/native";
import Video from "react-native-video";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import Button from '../components/elements/Button';
import BackgroundVideo from '../components/shared/BackgroundVideo';
import styles from './HomeStyles';

const { height } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackgroundVideo fileName='videoplayback.mp4' />

      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Button
        title="Create an Account"
        btnStyle={[styles.appButtonContainer, styles.createAccountBtn]}
        btnTextStyle={styles.appButtonText}
        onPress={() =>
          navigation.navigate('Signup', { name: 'Signup' })
        }
      />
      <Button
        title="Sign In"
        btnTextStyle={styles.loginButtonText}
        onPress={() =>
          navigation.navigate('Dashboard', { name: 'Dashboard' })
        }
      />
      <View style={styles.bottomView}>
        <Text style={styles.loginButtonText}> Powered by Nucleus HealthCare </Text>
        <Text style={styles.loginButtonText}> Version .01 </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
