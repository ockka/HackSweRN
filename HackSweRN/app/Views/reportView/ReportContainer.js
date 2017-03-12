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
import networkActions from '../../actions/networkActions';

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

    var {
      areaData
    } = this.props;
    var components = areaData.components;

    return (
      <ScrollView>
        <View style={styles.container}>
          {areaData.id > 0 &&
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={Images[areaData.name]}
                />
              <Text style={styles.textHeadline}>{areaData.label}</Text>
              <View style={styles.rowContainer}>
                {components.length > 0 && <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>{components[0].title}</Text>
                  <Text style={styles.textNumber}>{components[0].value}</Text>
                </View>}
                {components.length > 1 && <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>{components[1].title}</Text>
                  <Text style={styles.textNumber}>{components[1].value}</Text>
                </View>}
              </View>
              <View style={styles.rowContainer2}>
                {components.length > 2 && <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>{components[2].title}</Text>
                  <Text style={styles.textNumber}>{components[2].value}</Text>
                </View>}
                {components.length > 3 && <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>{components[3].title}</Text>
                  <Text style={styles.textNumber}>{components[3].value}</Text>
                </View>}
              </View>
              {components.length > 4 && <Image
                style={{ width: '100%', height: 275, marginTop: 20 }}
                source={{ uri: components[4].value }}
                />}
              <View style={styles.container2}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: parseFloat(areaData.latitude),
                    longitude: parseFloat(areaData.longitude),
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0421,
                  }}
                  >
                  <MapView.Marker
                    coordinate={{
                      latitude: parseFloat(areaData.latitude),
                      longitude: parseFloat(areaData.longitude)
                    }}
                    />
                </MapView>
              </View>
              <HomeButton label={'Gör en ny sökning'} goTo={this.goToHome} style={{ marginBottom: 10 }} />
            </View>}
        </View>
      </ScrollView>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer)
