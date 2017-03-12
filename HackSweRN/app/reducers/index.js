import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './userReducer'
import categories from './categoriesReducer'
import area from './areaReducer'
import areaData from './getAreaReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  categories,
  area,
  areaData
})

export default rootReducer
