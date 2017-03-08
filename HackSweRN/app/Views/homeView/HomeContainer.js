import React from 'react'
import {
  View
} from 'react-native'
import HomeButton from '../../components/HomeButton'

export default class HomeContainer extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View>
        <HomeButton label={'Go To About'} goToAbout={this.goToAbout} />
        <HomeButton label={'Go To Users'} goToAbout={this.goToUsers} />
      </View>
    )
  }
  openMenu = () => {
    alert("Menu button pressed!")
  }
  goToAbout = () => {
    this.props.navigator.push({
      name: 'About',
      title: 'About',
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
}