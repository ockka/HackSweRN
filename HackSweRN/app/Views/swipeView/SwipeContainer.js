import React from 'react';
import SwipeCards from 'react-native-swipe-cards';
import Card from '../../components/Card'

import VideoContainer from '../videoView/VideoContainer'
import { View, Text } from 'react-native'
import networkActions from '../../actions/networkActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './styles.js';

const Cards = [
  { text: 'Tomato', backgroundColor: 'red' },
  { text: 'Aubergine', backgroundColor: 'purple' }
]

class NoCard extends React.Component {
  componentWillMount (){
    this.props.goToVideo()
  }
  
  render() {
    return (
      <View>
      </View>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  networkActions: bindActionCreators(networkActions, dispatch),
  dispatch
})

export class SwipeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cards: Cards }
  }

  handleYup = (card) => {
    console.log(`Yup for ${card.text}`)
  }

  handleNope = (card) => {
    console.log(`Nope for ${card.text}`)
  }

  goToVideo = () => {
    this.props.dispatch(networkActions.postArea())

    this.props.navigator.push({
      name: 'Video',
      title: 'Video',
      openMenu: this.openMenu
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeCards
          cards={this.state.cards}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoCard goToVideo={this.goToVideo} />}
          showYup={true}
          showNope={true}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          />
      </View>
    )
  }
}
export default connect(mapDispatchToProps)(SwipeContainer)
