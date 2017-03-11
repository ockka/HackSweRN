import { StyleSheet } from 'react-native'
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderColor: colors.blue,
    backgroundColor: colors.white,
    borderRadius: 25,
    width: 300,
    alignItems: 'center'
  }
})
