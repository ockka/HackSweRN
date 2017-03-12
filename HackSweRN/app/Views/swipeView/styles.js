import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.platinum,
    alignItems: 'center'
  },
  cardsContainer: {
    flex: 1,
    backgroundColor: colors.platinum
  },
  text: {
    marginTop: 100,
    fontSize: 30,
    color: colors.blue,
    fontFamily: 'Montserrat-Regular'
  },
  textDescription: {
    marginTop: 20,
    fontSize: 15,
    color: colors.amaranth,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 10
  },
  choiceContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  left: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 10,
    backgroundColor: colors.amaranth,
    color: colors.white,
    marginRight: 30
  },
  right: {
    flex: 1,
    textAlign: 'right',
    fontSize: 20,
    paddingRight: 10,
    backgroundColor: colors.blue_green,
    color: colors.white,
    marginLeft: 30
  }
})
