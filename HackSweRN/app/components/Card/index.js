import React from 'react'
import {
  View,
  Text
} from 'react-native'
var styles = require('./styles.js')

export default class Card extends React.Component {
  render() {
    return (
      <View style={[styles.card, { backgroundColor: this.props.backgroundColor }]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}