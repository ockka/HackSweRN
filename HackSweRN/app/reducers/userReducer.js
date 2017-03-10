import * as types from '../constants/actionTypes'

const initialState = {
  users: []
}

const users = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_USERS: {
      return {...state, fetching: action.fetching }
    }

    case types.GET_USERS_SUCCESS: {
      return {...state, fetching: action.fetching, users: action.payload}
    }
  }
  return state
}

export default users
