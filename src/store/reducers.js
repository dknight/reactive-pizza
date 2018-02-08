import ActionsTypes from '../ActionsTypes'
import { combineReducers } from 'redux'

export const ingredient = (state={}, action) => {
  switch (action.type) {
    case ActionsTypes.USE_INGREDIENT:
    case ActionsTypes.DROP_INGREDIENT:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          used: !action.used
        }
    default:
      return state
  }
}

export const ingredients = (state=[], action) => {
  switch (action.type) {
    case ActionsTypes.USE_INGREDIENT:
    case ActionsTypes.DROP_INGREDIENT:
      return state.map(ingr => ingredient(ingr, action))
    case ActionsTypes.FETCH_INGRIDIENTS:
      return action.ingredients
    case ActionsTypes.RESET_INGRIDIENTS:
      return state.map(ingr => ({
        ...ingr,
        used: false
      }))
    default:
      return state
  }
}

export const order = (state={}, action) => {
  switch (action.type) {
    case ActionsTypes.ORDER_TOGGLE:
      return { open: action.open }
    case ActionsTypes.ORDER_SUBMIT:
      return action
    default:
      return state
  }
}

const AppReducers = combineReducers({
  ingredients: ingredients,
  order: order
})

export default AppReducers