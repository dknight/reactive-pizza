import calculatePrice from '../src/lib/price-helper'
import store from '../src/store'
import { useIngredient } from '../src/actions'
import { mount } from 'enzyme'
import ReactTestUtils from 'react-dom/test-utils';

describe('price helper', () => {
  
  it ('should have default price', () => {
    expect(calculatePrice([])).toBeCloseTo(3.0)
  })

  it ('should calculate price of used ingredients', () => {
    store.dispatch(useIngredient(__testIngredients__[0]))
    store.dispatch(useIngredient(__testIngredients__[1]))
    store.dispatch(useIngredient(__testIngredients__[2]))

    expect(
      calculatePrice(__testUsedIngredients__.filter(ingr => ingr.used))
    ).toBeCloseTo(3.9)
  })

  it ('always returns default price for pizza base', () => {
    expect(calculatePrice([NaN, NaN])).toBeCloseTo(3.0)
  })
})