import '../../config/test-config.js'
import React from 'react'
import { PriceContainer } from '../components/containers'
import TopPanel from '../components/ui/TopPanel'
import { shallow } from 'enzyme'

describe('TopPanel', () => {

  let _ontoggle
  let _topPanel

  beforeAll(() => {
    _ontoggle = jest.fn()
    _topPanel = shallow(<TopPanel toggleOrder={_ontoggle}/>)
  })

  it ('should render top', () => {
    expect(_topPanel.find('#TopPanel').length).toBe(1)
  })

  it ('has order button and click it', () => {
    expect(_topPanel.find('#order-button').length).toBe(1)
  })

  it ('has price element', () => {
    expect(_topPanel.find('#order-price').length).toBe(1)
  })

  it('should click order button', () => {
    _topPanel.find('#order-button').simulate('click')
    expect(_ontoggle).toBeCalled()
  })
})
