import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    backgroundColor: colors.platinum,
    flex: 1
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  videoContainer: {
    marginTop: 40,
    height: 380,
    backgroundColor: colors.black
  },
  textContainer: {
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    marginTop: 100
  }
})
