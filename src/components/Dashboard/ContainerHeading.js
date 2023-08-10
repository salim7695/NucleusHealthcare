import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../screens/Dashboard/styles';

const ContainerHeading = ({title, action}) => {
  return (
    <>
      <View style={[styles.header, styles.pullApart]}>
        <Text style={styles.headingTitle}>{title}</Text>
        {action}
      </View>
    </>
  );
};

export default ContainerHeading;
