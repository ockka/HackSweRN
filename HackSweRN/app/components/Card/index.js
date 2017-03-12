import React from 'react'
import {
  View,
  Text
} from 'react-native';

import { CardColors } from '../../assets/videos';

var styles = require('./styles.js');

export default class Card extends React.Component {

  render() {
    var {
      label,
      name,
      left,
      right
    } = this.props;
    if (!label) { return false; }

    return (
      <View style={styles.container}>
        <View style={[styles.cardContainer, { backgroundColor: CardColors[name] }]}>
          <Text style={styles.text}>{label}</Text>
        </View>
      </View>

    )
  }
}
