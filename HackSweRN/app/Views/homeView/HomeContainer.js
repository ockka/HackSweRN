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
  componentDidMount() {
    this.props.dispatch(networkActions.getUsers())
    this.props.dispatch(networkActions.getCategories())
  }

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
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

  render() {
    return (
      <View>
        <View style={styles.textContainer}>
          <Text>
            {'Välkommen till Hitta Ditt Häng!'}
          </Text>
        </View>
        <HomeButton label={'Go To Video'} goTo={this.goToVideo} />
        <HomeButton label={'Go To Users'} goTo={this.goToUsers} />
        <HomeButton label={'Go To Swipe'} goTo={this.goToSwipe} />
        <View style={styles.buttonContainer}>
          <HomeButton label={'Nästa'} goTo={this.nextPage} />
        </View>
      </View>
    )
  }

}
export default connect(mapDispatchToProps)(HomeContainer)
