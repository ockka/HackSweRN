import React from 'react'
import {
  View,
  Text,
  ListView
} from 'react-native'



export default class UsersContainer extends React.Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows([]),
      jsonData: ''
    }
  }


  getUsersFromApi() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    return fetch('https://hack-for-sweden-netlight.herokuapp.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          jsonData: responseJson,
          dataSource: ds.cloneWithRows(responseJson)
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    var users = this.getUsersFromApi()
  }

  render() {
    console.log('UsersContainer')
    console.log(this.state.jsonData)
    return (
      <View style={{
        marginTop: 100,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>Users Users Users</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.id} {rowData.username}</Text>}
          />
      </View>
    )
  }

}

