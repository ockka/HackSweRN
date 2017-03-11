import * as types from '../constants/actionTypes'
import apiCommunicator from '../api/apiCommunicator'

const basePath = `https://hack-for-sweden-netlight.herokuapp.com`

const networkActions = {
  getUsers() {
    return (dispatch) => {
      dispatch({
        type: types.GET_USERS,
        fetching: true
      })
      apiCommunicator.getMethod(`${basePath}/users`)
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
  },
  getCategories() {
    return (dispatch) => {
      dispatch({
        type: types.GET_CATEGORIES,
        fetching: true
      })
      apiCommunicator.getMethod(`${basePath}/categories`)
        .then((response) => {
          dispatch({
            type: types.GET_CATEGORIES_SUCCESS,
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

export default networkActions
