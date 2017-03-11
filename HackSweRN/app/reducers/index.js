import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './userReducer'
import categories from './categoriesReducer'
import area from './areaReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  categories,
  area
})

export default rootReducer
