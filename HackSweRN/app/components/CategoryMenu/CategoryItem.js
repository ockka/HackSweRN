import React, { Component, PropTypes } from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles.js';

class CategoryItem extends Component {

    constructor(props) {
        super(props);
        this.handleOnPress = this.handleOnPress.bind(this);
        this.toggled = false;
    }
    handleOnPress() {
        this.props.onPress(this.props.category);
    }
    render() {
      if (!this.props.category) {
        alert('No category for the button..');
        return false;
      }
      var title = this.props.category.label;

      var toggledClass = this.props.toggled ? 'Toggled' : '';

      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles['button' + toggledClass]}
            onPress={this.handleOnPress}>
            <Text style={styles.text}>
              {title}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
}

export default CategoryItem;
