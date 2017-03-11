import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './userReducer'
import categories from './categoriesReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  categories
})

export default rootReducer
