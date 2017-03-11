import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.platinum
  },
  textContainer: {
    marginTop: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.blue,
    fontSize: 20
  },
  textLogo: {
    marginTop: 5,
    color: colors.blue_green,
    fontSize: 35,
    fontWeight: 'bold'
  },
  buttonContainer: {
    alignItems: 'flex-end'
  }
})
