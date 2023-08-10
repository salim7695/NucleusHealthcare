import React from 'react';
import { Text, Image, View } from 'react-native';

import ContainerHeadingAction from './ContainerHeadingAction';
import ContainerHeading from './ContainerHeading';
import styles from '../../screens/Dashboard/styles';
import gift from '../../assets/images/gift.png';

const InvitationCard = ({title, titleAction}) => {
  return (
    <View>
      <ContainerHeading title={title} action={titleAction} />
      <View style={[styles.container, styles.backgroundPink]}>
        <View
          style={[
            styles.marginTopSmall,
            styles.marginHorizantalSmall,
            styles.pullApart,
            styles.marginSmall,
          ]}>
          <Image style={styles.hero} source={gift} />
          <View style={styles.marginSmall}>
            <Text style={styles.titleText}>Join The Club</Text>
            <Text style={styles.bodyTextSmall}>
              Earn rewards for consistent donations and refering family and
              friends
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InvitationCard;
