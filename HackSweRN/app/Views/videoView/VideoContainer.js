import React from 'react'
import {
  View,
  Text
} from 'react-native'
var styles = require('./styles.js');

import Video from 'react-native-video';
import HomeButton from '../../components/HomeButton';
import Videos from '../../assets/videos';

export default class VideoContainer extends React.Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    this.props.navigator.push({
      name: 'Report',
      title: 'Report'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {'Ditt häng är...'}
          </Text>
        </View>
        <View style={styles.videoContainer}>
          <Video
            source={Videos['kungsholmen']}
            style={styles.backgroundVideo}
            rate={1}
            volume={1}
            resizeMode="cover"
            onEnd={this.onVideoEnd}
            key="video1"
            />
        </View>
        <HomeButton label={'Skip Video'} goTo={this.nextPage} />
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
