import React from 'react'
import ReactDOM from 'react-dom'
import { ReactivePizzaAppContainer } from './components/containers'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import { toggleOrder, fetchAsyncIgredients } from './actions'

import './stylesheets/normalize.css'
import './stylesheets/layout.css'
import './stylesheets/IngredientList.css'
import './stylesheets/OrderForm.css'
import './stylesheets/Pizza.css'
import './stylesheets/TopPanel.css'

document.addEventListener('keypress', (e) => {
  if (e.keyCode === 27) {
    store.dispatch(toggleOrder(false))
  }
})
const approot = document.getElementById('react-root')

ReactDOM.render(
  <Provider store={store}>
    <ReactivePizzaAppContainer/>
  </Provider>, approot)

store.dispatch(fetchAsyncIgredients('data/init-data.json'))

registerServiceWorker()