import ActionsTypes from '../src/ActionsTypes'
import deepFreeze from 'deep-freeze'
import { ingredient,
         ingredients,
         order } from '../src/store/reducers'

describe('Should use ingredient', () => {

  it ('uses ingredient default state', () => {
    const state = {}
    const action =  {
      type: ActionsTypes.USE_INGREDIENT,
      ...state
    }
    const results = ingredient(undefined, action)
    deepFreeze(state)
    deepFreeze(action)
    expect(results.used).toBeTruthy()
  })

  it ('uses ingredient', () => {
    const state = __testIngredients__[0]
    const action =  {
      type: ActionsTypes.USE_INGREDIENT,
      ...state
    }
    const results = ingredient(state, action)
    deepFreeze(state)
    deepFreeze(action)
    expect(results.used).toBeTruthy()
  })

  it ('unuses ingredient', () => {
    const state = __testUsedIngredients__[0]
    const action =  {
      type: ActionsTypes.USE_INGREDIENT,
      ...state
    }
    let results = ingredient(state, action)
    deepFreeze(state)
    deepFreeze(action)
    expect(results.used).toBeFalsy()
  })

  it ('ingredients retuns default action', () => {
    const state = __testIngredients__[0]
    const action =  {
      ...state
    }
    const results = ingredient(state, action)
    deepFreeze(state)
    deepFreeze(action)
    expect(results).toBe(state)
  })

  it ('fetches ingredients', () => {
    const state = __testIngredients__
    const action = {
      type: ActionsTypes.FETCH_INGRIDIENTS,
      ingredients: __testIngredients__
    }
    deepFreeze(state)
    deepFreeze(action)
    const results = ingredients(state, action)
    expect(results).toEqual(__testIngredients__)
  })

  it ('fetches empty ingredients', () => {
    const state = []
    const action = {}
    deepFreeze(state)
    deepFreeze(action)
    const results = ingredients(state, action)
    expect(results).toEqual([])
  })

  it ('closes order dialog', () => {
    const state = false
    const action = {
      type: ActionsTypes.ORDER_TOGGLE,
      open: false
    }
    deepFreeze(state)
    deepFreeze(action)
    const results = order(state, action)
    expect(results.open).toBe(false)
  })

  it ('opens order dialog', () => {
    const state = false
    const action = {
      type: ActionsTypes.ORDER_TOGGLE,
      open: true
    }
    deepFreeze(state)
    deepFreeze(action)
    const results = order(state, action)
    expect(results.open).toBe(true)
  })

})