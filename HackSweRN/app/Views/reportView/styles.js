import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.platinum
  },
  textHeadline: {
    height: 50,
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },
  textContainer: {
    height: 100,
    width: '50%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000'
  },
  textTitle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center'
  },
  textNumber: {
    flex: 2,
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  rowContainer: {
    height: 100,
    flexDirection: 'row'
  },
  rowContainer2: {
    height: 100,
    marginTop: 20,
    flexDirection: 'row'
  },
  container2: {
    marginTop: 20,
    height: 300,
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})
