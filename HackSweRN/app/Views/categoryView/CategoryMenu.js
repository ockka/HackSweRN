import React, { Component } from 'react';
import { connect } from 'react-redux';
import networkActions from '../../actions/networkActions';
import { bindActionCreators } from 'redux';
const mapDispatchToProps = (dispatch) => ({
  networkActions: bindActionCreators(networkActions, dispatch),
  dispatch
});
const mapStateToProps = (store) => ({
  categories: store.categories.categories
})

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
        <View style={styles.contentContainer}>
          {this.props.categories.map((cat, i) => {
            return <CategoryItem title={cat.name} key={i} />
          })}
          <HomeButton label={'Next Page'} goTo={this.nextPage} />
        </View>
      </View>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
