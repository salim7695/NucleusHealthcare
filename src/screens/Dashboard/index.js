import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import Header from '../../components/Dashboard/Header';
import ContainerHeading from '../../components/Dashboard/ContainerHeading';
import ContainerHeadingAction from '../../components/Dashboard/ContainerHeadingAction';
import Container from '../../components/Dashboard/Container';
import ReadingList from '../../components/Dashboard/ReadingList';
import InvitationCard from '../../components/Dashboard/InvitationCard';
import MonthlyGoals from '../../components/Dashboard/MonthlyGoals';
import ReadingBlock from '../../components/Dashboard/ReadingBlock';
import UpcomingAppointments from '../../components/Dashboard/UpcomingAppointments';
import styles from './styles';

const Dashboard = () => {
  return(
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        <MonthlyGoals />
        <UpcomingAppointments />
        <ReadingList />
        <InvitationCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Dashboard;
