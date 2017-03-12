import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './styles.js';
import networkActions from '../../actions/networkActions'
import MapView from 'react-native-maps';


const mapStateToProps = (store) => ({
  areaData: store.areaData.area
})

const mapDispatchToProps = (dispatch) => ({
  networkActions: bindActionCreators(networkActions, dispatch),
  dispatch
})

export class ReportContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(networkActions.getArea(1));
    this.setState({ areaData: this.props.areaData });
  }

  render() {
    /*
    var textItem = ''
    if (this.props.areaData.id > 0) {
      this.props.areaData.components.forEach((item) => {
        textItem = item
      })
    }
    */
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.props.areaData.id > 0 ?
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require('../../assets/images/vasastan.jpg')}
                />
              <Text style={styles.textHeadline}>{this.props.areaData.label}</Text>
              <View style={styles.rowContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>{this.props.areaData.components[0].title}</Text>
                  <Text style={styles.textNumber}>{this.props.areaData.components[0].value}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>{this.props.areaData.components[1].title}</Text>
                  <Text style={styles.textNumber}>{this.props.areaData.components[1].value}</Text>
                </View>
              </View>
              <View style={styles.rowContainer2}>
                <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>{this.props.areaData.components[2].title}</Text>
                  <Text style={styles.textNumber}>{this.props.areaData.components[2].value}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>{this.props.areaData.components[3].title}</Text>
                  <Text style={styles.textNumber}>{this.props.areaData.components[3].value}</Text>
                </View>
              </View>
              <View style={styles.container2}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: parseFloat(this.props.areaData.latitude),
                    longitude: parseFloat(this.props.areaData.longitude),
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0421,
                  }}
                  />
                <MapView.Marker
                  coordinate={{latitude: parseFloat(this.props.areaData.latitude),
                  longitude: parseFloat(this.props.areaData.longitude)}}
                  />
              </View>
            </View> : null}
        </View>
      </ScrollView>
    )
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer)
