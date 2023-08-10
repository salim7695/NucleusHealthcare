import React from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native';

import SignUp from '../components/Signup/Form';
import BackgroundVideo from '../components/shared/BackgroundVideo';

const Signup = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <BackgroundVideo fileName='videoplayback.mp4' />
        <View style={styles.container}>
          <SignUp />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 109, 91, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
});

export default Signup;
