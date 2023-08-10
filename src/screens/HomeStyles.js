import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  backgroundVideo: {
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0,
    width: '100%'
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '7%',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode:'contain'
  },
  createAccountBtn: {
    borderColor: '#000',
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: '20%'
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10
  },
  appButtonText: {
    fontSize: 18,
    color: '#000',
    alignSelf: "center",
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default styles;
