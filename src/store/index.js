import { createStore, applyMiddleware } from 'redux'
import AppReducers from './reducers'

const logger = store => next => action => {
  // let result
  // console.groupCollapsed(`dispatching ${action.type}`)
  // console.log('prev state', store.getState())
  // console.log('action', action)
  // result = next(action)
  // console.log('next state', store.getState())
  // console.groupEnd()
  // return result
  return next(action)
}

//const saver = store => next => action => {
//  localStorage['pzapp-store'] = JSON.stringify(store.getState());
//  return next(action);
//};
const initialState = {
  ingredients: [],
  order: {
    open: false
  }
}
const middleware = applyMiddleware(logger)
const store = createStore(AppReducers, initialState, middleware)

export default store