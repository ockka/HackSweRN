import React from 'react'
import {
  View,
  Text
} from 'react-native'
var styles = require('./styles.js');
import { connect } from 'react-redux'
import Video from 'react-native-video';
import HomeButton from '../../components/HomeButton';
import Videos from '../../assets/videos';
import networkActions from '../../actions/networkActions'
import { bindActionCreators } from 'redux'

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
    this.getRef = this.getRef.bind(this);
  }

  componentDidMount(){
    this.props.dispatch(networkActions.getArea(this.props.area.id));
  }

  nextPage() {
    this.video.paused = true;
    this.props.navigator.push({
      name: 'Report',
      title: 'Report'
    });
    this.forceUpdate();
  }

  componentDidUpdate() {
    if(this.props.area.id > 0){
      this.props.dispatch(networkActions.getArea(this.props.area.id));
    }
  }

  getRef(ref) {
    this.video = ref;
  }

  render() {
    console.log("rendering videoContainer", this.props.area);
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {this.props.area.label}
          </Text>
        </View>
        {this.props.area.id > 0 && <View style={styles.videoContainer}>
          <Video
            ref={this.getRef}
            source={Videos[this.props.area.name]}
            style={styles.backgroundVideo}
            rate={1}
            volume={1}
            resizeMode="cover"
            playInBackground={true}
            onEnd={this.nextPage}
            key="video1"
            />
        </View>}
        <HomeButton label={'Skip Video'} goTo={this.nextPage} />
      </View>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer)
