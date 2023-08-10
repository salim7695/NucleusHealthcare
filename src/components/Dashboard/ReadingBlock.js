import React from 'react';
import { Text, Image, View } from 'react-native';

import styles from '../../screens/Dashboard/styles';
import bloodIcon from '../../assets/images/blood-icon.png';

const ReadingBlock = ({title, minutes}) => (
  <View style={styles.readingBlock}>
    <View style={[styles.blockHeader, styles.pullApart]}>
      <Image style={styles.blodIcon} source={bloodIcon} />
      <Text>Reading</Text>
    </View>
    <Text style={styles.titleText}>{title}</Text>
    <Text style={styles.headerCaption}>{`${minutes}min read`}</Text>
  </View>
);

export default ReadingBlock;
