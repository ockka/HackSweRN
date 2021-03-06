import * as types from '../constants/actionTypes'

const initialState = {
  area: {}
}

const area = (state = initialState, action) => {

  switch (action.type) {
    case types.POST_AREA: {
      return {...state, fetching: action.fetching }
    }

    case types.POST_AREA_SUCCESS: {
      return {...state, fetching: action.fetching, area: action.payload}
    }
  }
  return state
}

export default area
