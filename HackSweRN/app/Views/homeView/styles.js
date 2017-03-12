import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.platinum
  },
  textContainer: {
    marginTop: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colors.blue,
    fontSize: 20,
    fontFamily: 'Montserrat-Regular'
  },
  textLogo: {
    marginTop: 5,
    color: colors.blue_green,
    fontSize: 120,
    fontWeight: 'bold',
    fontFamily: 'BaconRequest-Thin'
  },
  textDescription: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 20
  },
  buttonContainer: {
    alignItems: 'flex-end'
  }
})
