import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    width: 150,
    borderColor: colors.blue
  },
  buttonNoBorder: {
    padding: 10
  },
  text: {
    color: colors.blue,
    fontFamily: 'Montserrat-Regular'
  }
})
