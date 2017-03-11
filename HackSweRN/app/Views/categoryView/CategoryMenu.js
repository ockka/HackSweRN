import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import networkActions from '../../actions/networkActions';
import { bindActionCreators } from 'redux';
const mapDispatchToProps = (dispatch) => ({
  networkActions: bindActionCreators(networkActions, dispatch),
  dispatch
});

import styles from './styles.js';

class CategoryMenu extends Component {

  constructor(props) {
    super(props);
    this.goToVideo = this.goToVideo.bind(this);
  }

  goToVideo = () => {
    this.props.navigator.push({
      name: 'Video',
      title: 'Video',
      openMenu: this.openMenu
    });
  }

  render() {
    return (
      <View>

      </View>
    );
  }

}

export default connect(mapDispatchToProps)(CategoryMenu);
