import React from 'react'
import {
  View,
  Text,
} from 'react-native'
var styles = require('./styles.js')
import Video from 'react-native-video'

export default class VideoContainer extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <View style={styles.container}>
        <Video source={require('../../assets/videos/kungsholmen.mp4')}
          style={styles.backgroundVideo}
          rate={1} volume={1} onEnd={this.onVideoEnd}
          resizeMode="cover" key="video1"
          />
      </View>
    )
  }

  onVideoEnd = () => {
    this.props.navigator.push({
      name: 'About',
      title: 'About',
      openMenu: this.openMenu
    });
  }
}