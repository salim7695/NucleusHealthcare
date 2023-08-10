import React from 'react';
import { View } from 'react-native';

import styles from '../../screens/Dashboard/styles';
import ContainerHeading from './ContainerHeading';

const Container = ({title, titleAction, children}) => {
  return (
    <>
      <ContainerHeading title={title} action={titleAction} />
      <View style={[styles.container, styles.backgroundGrey]}>{children}</View>
    </>
  );
};

export default Container;
