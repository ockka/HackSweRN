import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'

var styles = require('./styles.js')

export default class HomeButton extends React.Component {

  render() {

    const {
      goTo,
      label,
      noBorder
    } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles['button' + (noBorder ? 'NoBorder' : '')]}
          onPress={goTo}>
          <Text>
            {label}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

}
