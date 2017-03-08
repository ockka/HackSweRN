import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

var styles = require('./styles.js')

export default class HomeButton extends React.Component {
  render() {
    const { goToAbout, label } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={goToAbout}>
          <Text>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}