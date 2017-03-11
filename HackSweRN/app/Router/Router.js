import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native'

import AboutContainer from '../Views/aboutView/AboutContainer'
import HomeContainer from '../Views/homeView/HomeContainer'
import TestContainer from '../Views/usersView/UsersContainer'
import VideoContainer from '../Views/videoView/VideoContainer'

export default class Router extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Home', title: 'Home' }}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navigationBar}
            routeMapper={NavigationBarRouteMapper} />
        }
        />
    );
  }
  renderScene(route, navigator) {
    if (route.name == 'Home') {
      return (
        <HomeContainer
          navigator={navigator}
          {...route.passProps}
          />
      )
    }
    if (route.name == 'About') {
      return (
        <AboutContainer
          navigator={navigator}
          {...route.passProps}
          />
      )
    }
    if (route.name == 'Users') {
      return (
        <TestContainer
          navigator={navigator}
          {...route.passProps}
          />
      )
    }
    if (route.name == 'Video') {
      return (
        <VideoContainer
          navigator={navigator}
          {...route.passProps}
          />
      )
    }
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <TouchableOpacity
          onPress={() => { if (index > 0) { navigator.pop() } } }>
          <Text style={styles.leftButton}>
            Back
               </Text>
        </TouchableOpacity>
      )
    }
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.openMenu) return (
      <TouchableOpacity
        onPress={() => route.openMenu()}>
        <Text style={styles.rightButton}>
          {route.rightText || 'Menu'}
        </Text>
      </TouchableOpacity>
    )
  },
  Title(route, navigator, index, navState) {
    return (
      <Text style={styles.title}>
        {route.title}
      </Text>
    )
  }
};

const styles = StyleSheet.create({
  navigationBar: {
    borderWidth: 0.5,
    borderColor: '#d6d7da',

  },
  leftButton: {
    color: '#000000',
    margin: 10,
    fontSize: 17,
  },
  title: {
    paddingVertical: 10,
    color: '#000000',
    justifyContent: 'center',
    fontSize: 18
  },
  rightButton: {
    color: '#000000',
    margin: 10,
    fontSize: 16
  }
})