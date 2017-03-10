import React, { Component } from 'react'
import {
  AppRegistry,
  View
} from 'react-native'
import Router from './app/Router/Router'
import { setUpStore } from './store'
import { Provider } from 'react-redux'

const store = setUpStore({
})

class HackSweRN extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('HackSweRN', () => HackSweRN);
