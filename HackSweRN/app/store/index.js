import { applyMiddleware, createStore, compose } from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const middleware = applyMiddleware(promise(), thunk)

const enhancer = compose(
  middleware,
  process.env.NODE_ENV !== 'production' && typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)

export const setUpStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  )
  return store
}
