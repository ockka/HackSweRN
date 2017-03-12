import * as types from '../constants/actionTypes'
import apiCommunicator from '../api/apiCommunicator'

const basePath = `https://hack-for-sweden-netlight.herokuapp.com`

const networkActions = {
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
  },
  postArea(answers) {
    return (dispatch) => {
      dispatch({
        type: types.POST_AREA,
        fetching: true
      })
      apiCommunicator.postMethod(`${basePath}/areas/calculate`, { answers: answers })
        .then((response) => {
          dispatch({
            type: types.POST_AREA_SUCCESS,
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
  getArea(id) {
    return (dispatch) => {
      dispatch({
        type: types.GET_AREA,
        fetching: true
      })
      apiCommunicator.getMethod(`${basePath}/areas/${id}`)
        .then((response) => {
          dispatch({
            type: types.GET_AREA_SUCCESS,
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
