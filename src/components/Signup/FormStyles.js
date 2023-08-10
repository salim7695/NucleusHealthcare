import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 20,
    height: height - 100,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode:'contain',
    marginTop: 30,
    marginBottom: 30,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  filledAppButtonContainer: {
    borderColor: 'red',
    backgroundColor: 'pink'
  },
  appButtonText: {
    fontSize: 18,
    color: '#000',
    alignSelf: "center",
    backgroundColor: 'transparent'
  },
  bottomView: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '3%',
    left: '6%'
  },
});

export default styles;
