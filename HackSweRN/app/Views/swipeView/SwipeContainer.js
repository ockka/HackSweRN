import React from 'react';
import SwipeCards from '../../components/Card/SwipeCards';
import Card from '../../components/Card';

import VideoContainer from '../videoView/VideoContainer'
import { View, Text } from 'react-native'
import networkActions from '../../actions/networkActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './styles.js';

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
    this.answers = [];
  }

  handleYup = (card) => {
    this.answers.push({
      category_id: card.id,
      choice: 'right'
    });
  }

  handleNope = (card) => {
    this.answers.push({
      category_id: card.id,
      choice: 'left'
    });
  }

  goToVideo = () => {
    this.props.dispatch(networkActions.postArea(this.answers));

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
        <Text style={styles.textDescription}>
          {'Svep höger eller vänster.'}
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
