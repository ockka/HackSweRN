import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

var styles = require('./styles.js')

export default class HomeButton extends React.Component {
  render() {
    const { goTo, label } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={goTo}>
          <Text>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}