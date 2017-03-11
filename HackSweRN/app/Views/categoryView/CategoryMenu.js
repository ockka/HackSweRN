import React, { Component } from 'react';
import { connect } from 'react-redux';
import networkActions from '../../actions/networkActions';
import { bindActionCreators } from 'redux';
const mapDispatchToProps = (dispatch) => ({
  networkActions: bindActionCreators(networkActions, dispatch),
  dispatch
});

import {
  View,
  Text
} from 'react-native';

import CategoryItem from '../../components/CategoryMenu/CategoryItem.js';
import HomeButton from '../../components/HomeButton';

import styles from './styles.js';

class CategoryMenu extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    this.props.navigator.push({
      name: 'Swipe',
      title: 'Swipe',
      openMenu: this.openMenu
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <CategoryItem title={'Natur'} />
        <HomeButton label={'Next Page'} goTo={this.nextPage} />
      </View>
    );
  }

}

export default connect(mapDispatchToProps)(CategoryMenu);
