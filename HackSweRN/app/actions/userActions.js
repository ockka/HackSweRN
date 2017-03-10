import * as types from '../constants/actionTypes'
import apiCommunicator from '../api/apiCommunicator'

const userActions = {
  getUsers() {
    return (dispatch) => {
      dispatch({
        type: types.GET_USERS,
        fetching: true
      })
      apiCommunicator.getMethod(`https://hack-for-sweden-netlight.herokuapp.com/users`)
        .then((response) => {
          dispatch({
            type: types.GET_USERS_SUCCESS,
            payload: response,
            fetching: false
          })
        })
        .catch(error => {
          dispatch({
            type: types.GENERAL_ERROR_MESSAGE,
            payload: error,
            fetching: false
          })
        })
    }
  }
}

export default userActions
