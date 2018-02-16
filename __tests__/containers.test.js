import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import IngredientsList from '../src/components/ui/IngredientsList'
import { IngredientsListContainer } from '../src/components/containers'

const storeFake = state => {
  return {
    default: jest.fn(),
    subscribe: jest.fn(),
    dispatch: jest.fn(),
    getState: () => state,
  }
}


describe('container <IngredientsList/>', () => {
  let wrapper
  let component
  let container
  let _onuse

  beforeAll(() => {
    jest.resetAllMocks()

    const store = storeFake({})
    _onuse = jest.fn()

    wrapper = 
      mount(
        <Provider store={store}>
          <IngredientsListContainer/>
        </Provider>
      )

    container = wrapper.find(IngredientsListContainer)
    component = container.find(IngredientsList)
  })

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy()
    expect(component.length).toBeTruthy()
  })

  it('should map state to props', () => {
    const expectedPropKeys = [
      'ingredients',
      'order',
    ]
    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys))
  })

  it('should map dispatch to props', () => {
    const expectedPropKeys = ['onUse']

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys))
  })
})