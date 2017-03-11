import { StyleSheet } from 'react-native'
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderWidth: 1,
    padding: 8,
    backgroundColor: colors.blue_shade,
    borderRadius: 8,
    width: 300,
    borderColor: colors.blue_shade
  },
  buttonToggled: {
    borderWidth: 1,
    padding: 8,
    backgroundColor: colors.amaranth,
    borderRadius: 8,
    width: 300,
    borderColor: colors.amaranth
  },
  text: {
    color: colors.white,
    fontSize: 16,
    paddingLeft: 4
  }
})
