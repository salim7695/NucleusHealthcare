import React from 'react';
import { Text, Image, View } from 'react-native';

import styles from '../../screens/Dashboard/styles';
import qrCode from '../../assets/images/qr-code.png';

const Header = () => {
  return (
    <>
      <Text style={styles.headerCaption}>Monday Feb 15</Text>
      <View style={[styles.header, styles.pullApart]}>
        <Text style={styles.headerText}>Home</Text>
        <Image style={styles.headerImage} source={qrCode} />
      </View>
    </>
  );
};

export default Header;
