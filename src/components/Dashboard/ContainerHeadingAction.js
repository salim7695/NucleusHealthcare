import React from 'react';
import { Text } from 'react-native';

import styles from '../../screens/Dashboard/styles';

const ContainerHeadingAction = ({lable}) => {
  return <Text style={styles.headingActionLable}>{lable}</Text>;
};

export default ContainerHeadingAction;
