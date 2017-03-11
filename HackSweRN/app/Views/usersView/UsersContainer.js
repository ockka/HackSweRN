import React from 'react'
import {
  View,
  Text,
  ListView
} from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = (store) => ({
  categories: store.categories.categories,
  user: store.user.users
})

export class UsersContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    const ds1 = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    const userList = ds1.cloneWithRows(this.props.user)
    const ds2 = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    const categoriesList = ds2.cloneWithRows(this.props.categories)

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
          dataSource={userList}
          renderRow={(rowData) => <Text>{rowData.id} {rowData.username}</Text>}
          />
        <ListView
          dataSource={categoriesList}
          renderRow={(rowData) => <Text>{rowData.id} {rowData.name}</Text>}
          />
      </View>
    )
  }
}

export default connect(mapStateToProps)(UsersContainer)