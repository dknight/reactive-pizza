import React from 'react'
import { PriceContainer } from '../src/components/containers'
import OrderForm from '../src/components/ui/OrderForm'
import { shallow, mount } from 'enzyme'
import store from '../src/store'
import { useIngredient, fetchIgredients } from '../src/actions'

describe('OrderForm', () => {

  let _onuse, _ontoggl, _onsubmit, _orderForm

  beforeAll(() => {
    store.dispatch(fetchIgredients(__testIngredients__))
    _onuse = jest.fn()
    _ontoggl = jest.fn()
    _onsubmit = jest.fn()
    _orderForm = <OrderForm order={__testOrder__}
                   toggleOrder={_ontoggl} submitOrder={_onsubmit}/>
  })

  it ('should render closed order form', () => {
    expect(shallow(_orderForm).find('div.OrderForm').length).toBe(1)
  })

  it ('should render opened order form', () => {
    const __openedOrder__ = {...__testOrder__, open: true}
    expect(
      shallow(<OrderForm
        order={__openedOrder__}
        toggleOrder={_ontoggl}
        submitOrder={_onsubmit}/>)
        .find('div.OrderForm.opened')
        .length
    ).toBe(1)
  })

  it ('should render close order form on button click', () => {
    shallow(_orderForm).find('#btn-order-close').simulate('click')
    expect(_ontoggl).toBeCalled()
  })

  it ('should render table with 3 ingredients', () => {

    store.dispatch(useIngredient(store.getState().ingredients[0]))
    store.dispatch(useIngredient(store.getState().ingredients[1]))
    store.dispatch(useIngredient(store.getState().ingredients[2]))

    expect(shallow(_orderForm).find('table.table-order-ingredients').length).toBe(1)
     // header + rows
    expect(shallow(_orderForm).find('table.table-order-ingredients tbody tr').length).toBe(4)
  })

  it ('should submit form', () => {
    const e = {
      preventDefault: () => {},
      target: __testOrder__
    }
    shallow(_orderForm).find('form').simulate('submit', e)
    expect(_onsubmit).toBeCalled()
  })
})