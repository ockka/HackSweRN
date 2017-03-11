import React from 'react'
import {
  View,
  Text
} from 'react-native'
var styles = require('./styles.js');
import networkActions from '../../actions/networkActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Video from 'react-native-video';
import HomeButton from '../../components/HomeButton';
import Videos from '../../assets/videos';

const mapStateToProps = (store) => ({
  area: store.area.area
})

const mapDispatchToProps = (dispatch) => ({
  networkActions: bindActionCreators(networkActions, dispatch),
  dispatch
})

export class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(networkActions.getArea())
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
            {this.props.area.label}
          </Text>
        </View>
        <View style={styles.videoContainer}>
          <Video
            source={Videos['kungsholmen']}
            style={styles.backgroundVideo}
            rate={1}
            volume={1}
            resizeMode="cover"
            onEnd={this.nextPage}
            key="video1"
            />
        </View>
        <HomeButton label={'Skip Video'} goTo={this.nextPage} />
      </View>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer)