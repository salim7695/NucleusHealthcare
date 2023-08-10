import React from 'react';
import { ScrollView, View } from 'react-native';

import ContainerHeadingAction from './ContainerHeadingAction';
import ContainerHeading from './ContainerHeading';
import ReadingBlock from './ReadingBlock';
import styles from '../../screens/Dashboard/styles';

const ReadingList = () => {
  const action = <ContainerHeadingAction lable="View All" />;
  return (
    <View>
      <ContainerHeading title="Before you go" action={action} />
      <View style={styles.beforeYouGo}>
        <ScrollView horizontal>
          <ReadingBlock title="Check List Before Donation" minutes={5} />
          <ReadingBlock title="Check List Before Donation" minutes={5} />
          <ReadingBlock title="Check List Before Donation" minutes={5} />
        </ScrollView>
      </View>
    </View>
  );
};

export default ReadingList;
