import * as types from '../constants/actionTypes'

const initialState = {
  categories: []
}

const categories = (state = initialState, action) => {

  switch (action.type) {
    case types.GET_CATEGORIES: {
      return {...state, fetching: action.fetching }
    }

    case types.GET_CATEGORIES_SUCCESS: {
      return {...state, fetching: action.fetching, categories: action.payload}
    }
  }
  return state
}

export default categories
