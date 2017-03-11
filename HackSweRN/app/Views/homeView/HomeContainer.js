import React from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import networkActions from '../../actions/networkActions'
import HomeButton from '../../components/HomeButton'

const mapDispatchToProps = (dispatch) => ({
  networkActions: bindActionCreators(networkActions, dispatch),
  dispatch
})

export class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(networkActions.getUsers())
    this.props.dispatch(networkActions.getCategories())
  }

  constructor() {
    super()
  }
  render() {
    return (
      <View>
        <HomeButton label={'Go To Video'} goTo={this.goToVideo} />
        <HomeButton label={'Go To Users'} goTo={this.goToUsers} />
      </View>
    )
  }
  openMenu = () => {
    alert("Menu button pressed!!!")
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
}
export default connect(mapDispatchToProps)(HomeContainer)