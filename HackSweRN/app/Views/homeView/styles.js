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
  buttonContainer: {
    alignItems: 'flex-end'
  }
})
