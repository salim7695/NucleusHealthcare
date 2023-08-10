import React from 'react';
import { Text, Image, View } from 'react-native';

import ContainerHeadingAction from './ContainerHeadingAction';
import Container from './Container';
import styles from '../../screens/Dashboard/styles';
import calendarImg from '../../assets/images/calendar.png';


const UpcomingAppointments = () => {
  const action = <ContainerHeadingAction lable="View All" />;
  return (
    <Container title="Upcoming Appointments" titleAction={action}>
      <View style={styles.upcomingAppointments}>
        <View style={styles.upcomingAppointmentsLeft}>
          <Image style={styles.calendarImg} source={calendarImg} />
          <Text style={styles.calendarText}>Next App</Text>
          <Text style={styles.textBold}>N/A</Text>
        </View>
        <View style={styles.upcomingAppointmentsRight}>
          <Text style={styles.textBold}>Scheduled Appointments</Text>
          <Text style={styles.calendarText}>
            You currently have no scheduled appointments for plasma donation
          </Text>
          <Text style={styles.scheduleButton}>Schedule Donation</Text>
        </View>
      </View>
    </Container>
  );
};

export default UpcomingAppointments;
