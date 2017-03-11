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
    }
    handleOnPress() {
        alert('Button has been pressed!');
    }
    render() {
        const {
            title
        } = this.props;
        if (!title) {
          Alert.alert('No title for the button..');
          return false;
        }

        return (
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleOnPress}>
              <Text>
                {title}
              </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

export default CategoryItem;
