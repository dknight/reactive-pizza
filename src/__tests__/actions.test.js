import '../../config/test-config.js'
import ActionsTypes from '../ActionsTypes'
import store from '../store'
import { useIngredient,
         dropIngredient,
         fetchIgredients,
         fetchAsyncIgredients,
         toggleOrder,
         submitOrder } from '../actions'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../store/reducers'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';

describe('fetchIgredients', () => {

  beforeAll(() => {
    store.dispatch(fetchIgredients(__testIngredients__))
  })

  it ('should fetch ingredients', () =>
    expect(store.getState().ingredients.length).toBe(__testIngredients__.length)
  )

  it ('should have ID', () => {
    expect(store.getState().ingredients[0].id).toBeDefined()
  })

  it ('should have name', () => {
    expect(store.getState().ingredients[0].name).toBeDefined()
  })

  it ('should have slug', () => {
    expect(store.getState().ingredients[0].slug).toBeDefined()
  })

  it ('should have price', () => {
    expect(store.getState().ingredients[0].slug).toBeDefined()
  })

  it ('should have used', () => {
    expect(store.getState().ingredients[0].used).toBeDefined()
  })

  it ('should id have type string', () => {
    expect(typeof store.getState().ingredients[0].id === 'string').toBeTruthy()
  })

  it ('should name have type string', () => {
    expect(typeof store.getState().ingredients[0].name === 'string').toBeTruthy()
  })

  it ('should slug have type string', () => {
    expect(typeof store.getState().ingredients[0].slug === 'string').toBeTruthy()
  })
  
  it ('should price have type number', () => {
    expect(typeof store.getState().ingredients[0].price === 'number').toBeTruthy()
  })

  it ('should used have type boolean', () => {
    expect(typeof store.getState().ingredients[0].used === 'boolean').toBeTruthy()
  })
})

describe('useIngredient', () => {
  beforeAll(() => {
    store.dispatch(fetchIgredients(__testIngredients__))
  })

  it ('should use 1 ingredient', () => {
    const ingr = store.getState().ingredients[0]
    store.dispatch(useIngredient(ingr))
    expect(store.getState().ingredients[0].used).toBeTruthy()
  })

  it ('should unuse ingredient', () => {
    const ingr = store.getState().ingredients[0]
    store.dispatch(useIngredient(ingr))
    expect(store.getState().ingredients[0].used).toBeFalsy()
  })

  it ('should use 3 ingredient', () => {
    store.dispatch(useIngredient(store.getState().ingredients[0]))
    store.dispatch(useIngredient(store.getState().ingredients[1]))
    store.dispatch(useIngredient(store.getState().ingredients[2]))
    expect(store.getState().ingredients.filter(ingr => ingr.used).length).toBe(3)
  })

  it ('should drag and drop ingredient', () => {
    store.dispatch(dropIngredient(store.getState().ingredients[0]))
    expect(store.getState().ingredients[0].used).toBeTruthy()

    const ingrDropOffUndef = store.getState().ingredients[0]
    ingrDropOffUndef.dropoff = null
    store.dispatch(dropIngredient(ingrDropOffUndef))
    expect(store.getState().ingredients[0].used).toBeTruthy()

  })
})

describe('toggleOrder', () => {

  it ('should toggle order off', () => {
    store.dispatch(toggleOrder(false))
    expect(store.getState().order.open).toBeFalsy()
  })

  it ('should toggle order on', () => {
    store.dispatch(toggleOrder(true))
    expect(store.getState().order.open).toBeTruthy()
  })
})

describe('submitOrder', () => {

  it ('should submit order', () => {
    const results = {
      ...__testOrder__,
      type: ActionsTypes.ORDER_SUBMIT
    }
    store.dispatch(submitOrder(__testOrder__))
    expect(store.getState().order).toEqual(results)
  })
})


describe('test async', () => {

  it('should successfully call async fetch', async () => {
    const expectedAction = {
      type: 'FETCH_INGRIDIENTS',
      ingredients: __testIngredients__
    }
    const mock = new MockAdapter(axios);
    mock.onGet('/data/init-data.json').reply(200, {
      ingredients: __testIngredients__
    });

    const responsePromise = fetchAsyncIgredients('/data/init-data.json')(store.dispatch)
    await expect(responsePromise).resolves.toEqual(expectedAction)
  })

  it('should fail async', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('/boo.json').networkError()

    const responsePromise = fetchAsyncIgredients('/boo.json')(store.dispatch)
    await expect(responsePromise).rejects.toEqual(new Error('Network Error'))
  })
})
