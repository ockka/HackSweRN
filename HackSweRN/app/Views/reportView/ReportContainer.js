import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './styles.js';

const mapStateToProps = (store) => ({
  area: store.area.area
})

export class ReportContainer extends React.Component {

 constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.area.label}</Text>
      </View>
    )
  }

}
export default connect(mapStateToProps)(ReportContainer)
