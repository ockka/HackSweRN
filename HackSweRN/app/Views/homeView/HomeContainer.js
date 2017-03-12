import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import networkActions from '../../actions/networkActions'

import HomeButton from '../../components/HomeButton';

import styles from './styles.js';

const mapDispatchToProps = (dispatch) => ({
  networkActions: bindActionCreators(networkActions, dispatch),
  dispatch
})

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);

  }

  componentDidMount() {
    this.props.dispatch(networkActions.getCategories())
  }

  nextPage() {
    this.props.navigator.push({
      name: 'CategoryMenu',
      title: 'Category Menu'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {'Välkommen till'}
          </Text>
          <Text style={styles.textLogo}>
            {'SWIPE HOME'}
          </Text>
          <Text style={styles.textDescription}>
            {'Stockholm kan kännas stort även för någon som känner till alla områden. ' +
              'Denna app ger Dig Stockholms områden i din ficka. ' +
              'Vi presenterar ett område i Stockholm baserat på vår analys av dina preferenser baserat på några få, enkla frågor. ' +
              'Är du redo att ta reda på vilket fantastiskt område som passar dig bäst?'}
          </Text>
          <HomeButton label={'Starta'} goTo={this.nextPage} />
        </View>
      </View>
    )
  }

}
export default connect(mapDispatchToProps)(HomeContainer)
