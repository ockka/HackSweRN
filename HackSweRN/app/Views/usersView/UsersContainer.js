import React from 'react'
import {
  View,
  Text,
  ListView
} from 'react-native'
import { connect } from 'react-redux'

const mapStateToProps = (store) => ({
  users: store.user.users
})

export class UsersContainer extends React.Component {
  constructor() {
    super()
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    const dataSource = ds.cloneWithRows(this.props.users)
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
          dataSource={dataSource}
          renderRow={(rowData) => <Text>{rowData.id} {rowData.username}</Text>}
          />
      </View>
    )
  }
}

export default connect(mapStateToProps)(UsersContainer)