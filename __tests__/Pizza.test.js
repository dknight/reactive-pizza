import React from 'react'
import Pizza from '../src/components/ui/Pizza'
import { shallow } from 'enzyme'

describe ('Pizza UI component', () => {

  let _ondrop

  beforeAll(() => {
    _ondrop = jest.fn()
  })
  it ('should render pizza', () => {
    expect(
      shallow(<Pizza ingredients={__testIngredients__} onDrop={_ondrop}/>)
        .find('#Pizza-container')
        .length
    ).toBe(1)
  })

  it ('should have 2 used ingredients', () => {
    expect(
      shallow(<Pizza ingredients={__testUsedIngredients__} onDrop={_ondrop}/>)
        .find('#Pizza-base')
        .find('div.Pizza-ingredient')
        .length
    ).toBe(2)
  })
})