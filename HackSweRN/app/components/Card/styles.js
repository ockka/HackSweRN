import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  text: {
    color: colors.white,
    fontSize: 40
  }
})
