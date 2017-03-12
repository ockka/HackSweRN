import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

const MAX_NR_OF_CATEGORIES = 4;

class CategoryMenu extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.handleOnPress = this.handleOnPress.bind(this);
    var initialPressedCategories = {};
    this.props.categories.forEach((cat) => {
      initialPressedCategories[cat.name] = false;
    });
    this.pressedCategories = initialPressedCategories;
    this.nrOfToggledCats = 0;
  }

  nextPage() {
    var selectedCategories = []
    this.props.categories.forEach((cat) => {
      if (this.pressedCategories[cat.name]) {
        selectedCategories.push(cat)
      }
    })

    this.props.navigator.push({
      name: 'Swipe',
      title: 'Swipe',
      selectedCategories: selectedCategories,
      openMenu: this.openMenu
    });
  }

  handleOnPress(cat) {
    /* If we are trying to toggle a category we need to check that we haven't exceeded Max. */
    if (!this.pressedCategories[cat.name]) {
      if (this.nrOfToggledCats < MAX_NR_OF_CATEGORIES) {
        this.pressedCategories[cat.name] = true;
        this.nrOfToggledCats++;
        this.forceUpdate();
      } // else: nothing should happen
    } else {
      this.pressedCategories[cat.name] = false;
      this.nrOfToggledCats--;
      this.forceUpdate();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {'Vad är viktigt för Dig att ha nära?'}
          </Text>
          <Text style={styles.textDescription}>
            {'Välj fyra kategorier.'}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          {this.props.categories.map((cat, i) => {
            return (
              <CategoryItem
                category={cat}
                toggled={this.pressedCategories[cat.name]}
                onPress={this.handleOnPress}
                key={i} />
            );
          })}
          {this.nrOfToggledCats === 4 && <HomeButton label={'Next Page'} goTo={this.nextPage} />}
        </View>
      </View>
    );
  }

}

export default connect(mapStateToProps)(CategoryMenu);
