import React, { useState } from 'react';
import { Image, View } from 'react-native';
import AnimatedInput from "react-native-animated-input";

import Button from '../elements/Button';
import styles from './FormStyles';


const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [dob, setDOB] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNo, setPhoneNo] = useState(null);
  const [emailConfirmation, setEmailConfirmation] = useState(null);

  const isFilled = (
    firstName && lastName && dob && email && phoneNo && emailConfirmation
  );

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <AnimatedInput
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <AnimatedInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <AnimatedInput
        placeholder="Date of Birth"
        value={dob}
        onChangeText={(text) => setDOB(text)}
      />
      <AnimatedInput
        placeholder="Phone Number"
        value={phoneNo}
        onChangeText={(text) => setPhoneNo(text)}
      />
      <AnimatedInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <AnimatedInput
        placeholder="Email Confirmation"
        value={emailConfirmation}
        onChangeText={(text) => setEmailConfirmation(text)}
      />
      <Button
        title="Create Account"
        btnStyle={isFilled ? [styles.appButtonContainer, styles.filledAppButtonContainer , styles.bottomView] : [styles.appButtonContainer, styles.bottomView]}
        btnTextStyle={styles.appButtonText}
      />
    </View>
  );
};

export default SignUp;
