import React from 'react'
import ReactDOM from 'react-dom'
import store from '../src/store'
import { Provider } from 'react-redux'
import { ReactivePizzaAppContainer } from '../src/components/containers'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <ReactivePizzaAppContainer/>
    </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
