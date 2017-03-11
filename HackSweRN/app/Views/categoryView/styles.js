import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    backgroundColor: colors.platinum,
    flex: 1
  },
  contentContainer: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    marginTop: 100,
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    paddingLeft: 20,
    paddingRight: 20,
    color: colors.blue
  }
})
