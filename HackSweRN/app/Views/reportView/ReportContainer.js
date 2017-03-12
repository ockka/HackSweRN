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
import MapView from 'react-native-maps';
import Images from '../../assets/images';
import HomeButton from '../../components/HomeButton';

const mapStateToProps = (store) => ({
  area: store.area.area,
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
  goToHome = () => {
    this.props.navigator.push({
      name: 'Home',
      title: 'Home',
      openMenu: this.openMenu
    });
  }

  componentDidMount() {
    this.props.dispatch(networkActions.getArea(this.props.area.id));
    this.setState({ areaData: this.props.areaData });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.props.areaData.id > 0 ?
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={Images[this.props.areaData.name]}
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
              <Image
                style={{ width: '100%', height: 275, marginTop: 20 }}
                source={{ uri: this.props.areaData.components[4].value }}
                />
              <View style={styles.container2}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: parseFloat(this.props.areaData.latitude),
                    longitude: parseFloat(this.props.areaData.longitude),
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0421,
                  }}
                  >
                  <MapView.Marker
                    coordinate={{
                      latitude: parseFloat(this.props.areaData.latitude),
                      longitude: parseFloat(this.props.areaData.longitude)
                    }}
                    />
                </MapView>
              </View>
              <HomeButton label={'Gör en ny sökning'} goTo={this.goToHome} />
            </View> : null}
        </View>
      </ScrollView>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer)
