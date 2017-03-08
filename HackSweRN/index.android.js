import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'
import Router from './app/Router/Router'

class HackSweRN extends Component {
   render() {
      return (
         <Router />
      )
   }
}

AppRegistry.registerComponent('HackSweRN', () => HackSweRN);
