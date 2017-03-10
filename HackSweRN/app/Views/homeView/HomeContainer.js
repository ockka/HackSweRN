import React from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import userActions from '../../actions/userActions'
import HomeButton from '../../components/HomeButton'

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch),
  dispatch
})

export class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getUsers())
  }

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
    alert("Menu button pressed!!!")
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
export default connect(mapDispatchToProps)(HomeContainer)