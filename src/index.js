import React from 'react'
import ReactDOM from 'react-dom'
import { ReactivePizzaAppContainer } from './components/containers'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import { Provider } from 'react-redux'
import { toggleOrder, fetchIgredients } from './actions'
import axios from 'axios'

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

// Load ingredients use relative path for production
axios.get('data/init-data.json')
  .then(resp => store.dispatch(fetchIgredients(resp.data.ingredients)))
  .catch(error => console.error(error))

const approot = document.getElementById('react-root')

ReactDOM.render(
  <Provider store={store}>
    <ReactivePizzaAppContainer/>
  </Provider>, approot)

registerServiceWorker()