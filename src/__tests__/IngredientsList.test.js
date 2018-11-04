import '../../config/test-config.js'
import React from 'react'
import IngredientsList from '../components/ui/IngredientsList'
import Ingredient from '../components/ui/Ingredient'
import { shallow, mount, render } from 'enzyme'

describe ('Rendering IngredientsList UI component', () => {

  let _onuse, _defaultIngredients
  beforeAll(() => {
    _onuse = jest.fn()
    _defaultIngredients = <IngredientsList
                            ingredients={__testUsedIngredients__}
                            onUse={_onuse}/>
  })
  it ('rendering IngredientsList with children', () => {
    expect(
      render(_defaultIngredients)
        .find('ul')
        .find('li')
        .length
    ).toBe(__testIngredients__.length)
  })

  it ('has no ingredients', () => {
    expect(
      shallow(<IngredientsList ingredients={[]} onUse={_onuse}/>)
        .find('ul')
        .find('li')
        .length
    ).toBe(0)
  })

  it ('has two used ingredients', () => {
    expect(
      mount(_defaultIngredients)
        .find('.IngredientList li.used')
        .length
    ).toBe(2)
  })

  it ('invokes on use', () => {
    expect(
      mount(_defaultIngredients)
        .find('.IngredientList li')
        .last()
        .simulate('click')
    )
    expect(_onuse).toBeCalled()
  })
})
