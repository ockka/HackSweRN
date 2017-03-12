import React from 'react';
import SwipeCards from '../../components/Card/SwipeCards';
import Card from '../../components/Card';

import VideoContainer from '../videoView/VideoContainer'
import { View, Text } from 'react-native'
import networkActions from '../../actions/networkActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './styles.js';

const SelectedCategories = [
  { text: 'natur', name: 'natur', label: 'Natur', left: 'Skog', right: 'Park' },
  { text: 'bar', name: 'bar', label: 'Bar', left: 'Öl', right: 'Drink' }
]

class NoCard extends React.Component {
  componentWillMount (){
    this.props.goToVideo()
  }

  render() {
    return false;
  }
}
const mapDispatchToProps = (dispatch) => ({
  networkActions: bindActionCreators(networkActions, dispatch),
  dispatch
})

export class SwipeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.renderCard = this.renderCard.bind(this);
  }

  handleYup = (card) => {
    console.log(`Yup for ${card.label}`)
  }

  handleNope = (card) => {
    console.log(`Nope for ${card.label}`)
  }

  goToVideo = () => {
    this.props.dispatch(networkActions.postArea())

    this.props.navigator.push({
      name: 'Video',
      title: 'Video'
    });
  }

  renderCard(card) {
    return <Card {...card} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {'Vad föredrar du?'}
        </Text>
        <View style={styles.cardsContainer}>
          <SwipeCards
            cards={this.props.selectedCategories}
            renderCard={this.renderCard}
            renderNoMoreCards={() => <NoCard goToVideo={this.goToVideo} />}
            showYup
            showNope
            handleYup={this.handleYup}
            handleNope={this.handleNope}
            />
        </View>
      </View>
    )
  }
}

export default connect(mapDispatchToProps)(SwipeContainer)

// {this.left && this.right && (<View style={styles.choiceContainer}>
//   <Text style={styles.left}>{this.left}</Text>
//   <Text style={styles.right}>{this.right}</Text>
// </View>)}
