import React from 'react'
import {
  View,
  Text,
} from 'react-native'

export default class AboutContainer extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>About Content</Text>
      </View>
    )
  }
}