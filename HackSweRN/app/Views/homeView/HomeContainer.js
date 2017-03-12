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
    this.props.dispatch(networkActions.getUsers())
    this.props.dispatch(networkActions.getCategories())
  }

  nextPage() {
    this.props.navigator.push({
      name: 'CategoryMenu',
      title: 'Category Menu'
    });
  }

  goToVideo = () => {
    this.props.navigator.push({
      name: 'Video',
      title: 'Video',
      openMenu: this.openMenu
    });
  }

  goToUsers = () => {
    this.props.navigator.push({
      name: 'Users',
      title: 'Users',
      openMenu: this.openMenu
    });
  }
  goToSwipe = () => {
    this.props.navigator.push({
      name: 'Swipe',
      title: 'Swipe',
      openMenu: this.openMenu
    });
  }
  goToReport = () => {
    this.props.navigator.push({
      name: 'Report',
      title: 'Report',
      openMenu: this.openMenu
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
            {'HITTA DITT HÄNG'}
          </Text>
        </View>
        <HomeButton label={'Go To Video'} goTo={this.goToVideo} />
        <HomeButton label={'Go To Users'} goTo={this.goToUsers} />
        <HomeButton label={'Go To Swipe'} goTo={this.goToSwipe} />
        <HomeButton label={'Go To Report'} goTo={this.goToReport} />
        <View style={styles.buttonContainer}>
          <HomeButton label={'Nästa'} goTo={this.nextPage} noBorder />
        </View>
      </View>
    )
  }

}
export default connect(mapDispatchToProps)(HomeContainer)
