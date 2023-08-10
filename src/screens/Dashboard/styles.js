import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    margin: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  pullApart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  chart: {
    height: 120,
    width: 120,
  },
  hero: {
    height: 75,
    width: 75,
  },
  header: {
    marginTop: 9,
    marginBottom: 9,
  },
  headerCaption: {
    fontSize: 14,
    color: '#5B5B5B',
  },
  headerText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#312F30',
  },
  headerImage: {
    height: 36,
    width: 36,
  },
  textMedium: {
    fontWeight: '500',
  },
  bodyText: {
    color: '#494949',
    fontSize: 16,
  },
  titleText: {
    color: '#312F30',
    fontSize: 20,
  },
  bodyTextSmall: {
    color: '#494949',
    fontSize: 12,
  },
  titleTextSmall: {
    color: '#312F30',
    fontSize: 16,
    fontWeight: '500',
  },
  marginSmall: {
    margin: 24,
  },
  marginTopSmall: {
    marginTop: 24,
  },
  marginVerticalSmall: {
    marginVertical: 24,
  },
  marginHorizantalSmall: {
    marginHorizontal: 24,
  },
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    borderRadius: 16,
  },
  containerHeader: {
    marginTop: 28,
    marginBottom: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#312F30',
  },
  headingActionLable: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4658FB',
  },
  backgroundPink: {
    backgroundColor: '#F7E7E7',
  },
  backgroundGrey: {
    backgroundColor: '#ddd',
  },
  upcomingAppointments: {
    flexDirection: 'row',
  },
  upcomingAppointmentsLeft: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#E1E0E1',
  },
  upcomingAppointmentsRight: {
    flex: 2 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  calendarImg: {
    width: 50,
    height: 50,
  },
  calendarText: {
    color: '#494949',
    fontSize: 12,
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
  scheduleButton: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#4658FB',
  },
  beforeYouGo: {
    flexDirection: 'row',
    marginRight: 24,
  },
  readingBlock: {
    height: 150,
    width: 150,
    backgroundColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    marginRight: 15,
  },
  blockHeader: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  blodIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
