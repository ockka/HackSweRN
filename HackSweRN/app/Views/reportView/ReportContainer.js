import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import networkActions from '../../actions/networkActions'

import HomeButton from '../../components/HomeButton';

import styles from './styles.js';

const mapDispatchToProps = (dispatch) => ({
  networkActions: bindActionCreators(networkActions, dispatch),
  dispatch
})

export class ReportContainer extends React.Component {

 constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }

}
export default connect(mapDispatchToProps)(ReportContainer)
