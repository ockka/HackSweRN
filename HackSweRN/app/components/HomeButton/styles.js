import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: 200,
    borderColor: colors.blue_shade
  },
  buttonNoBorder: {
    padding: 10
  }
})
