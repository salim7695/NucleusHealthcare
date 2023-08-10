import React from 'react';
import { Text, Image, View } from 'react-native';
import ContainerHeadingAction from './ContainerHeadingAction';
import Container from './Container';
import styles from '../../screens/Dashboard/styles';
import greyCircle from '../../assets/images/grey-circle.png';

const MonthlyGoals = () => {
  const action = <ContainerHeadingAction lable="Update Goals" />;
  return (
    <Container title="Monthly Goals" titleAction={action}>
      <View
        style={[
          styles.marginTopSmall,
          styles.marginHorizantalSmall,
          styles.pullApart,
        ]}>
        <View>
          <View style={[styles.header]}>
            <Text style={[styles.bodyText, styles.textMedium]}>Donations</Text>
            <Text style={[styles.titleText, styles.textMedium]}>0/8</Text>
          </View>
          <View style={[styles.header]}>
            <Text style={[styles.bodyText, styles.textMedium]}>Donations</Text>
            <Text style={[styles.titleText, styles.textMedium]}>0/8</Text>
          </View>
        </View>
        <Image style={styles.chart} source={greyCircle} />
      </View>
      <Text style={[styles.bodyText, styles.marginSmall]}>
        Welcome to Serum! Go schedule a donation to start working on your goal.
      </Text>
    </Container>
  );
};

export default MonthlyGoals;
