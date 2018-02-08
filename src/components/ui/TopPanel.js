import React from 'react'
import PropTypes from 'prop-types'
import { PriceContainer } from '../containers'
import store from '../../store'

const TopPanel = ({toggleOrder}) => {

  const checkIgredientsAndToggleOrder = () => {
    let open = false
    const usedIngredientsCount = store.getState().ingredients.filter(ingr => ingr.used).length
    if (usedIngredientsCount > 0) {
      open = true
    } else {
      open = window.confirm('You havent choosed any ingredient do you wish to order empty base?');
    }
    return toggleOrder(open)
  }

  return (
    <div id="TopPanel">
      <img id="logo-img" src='/img/top-pizza-img.svg' alt="Reactive Pizza"/>
      <h1>Reactive Pizza</h1>
      <div id="order-price">
        <PriceContainer/>
      </div>
      <button id="order-button" onClick={() => checkIgredientsAndToggleOrder()}>
        Order
      </button>
    </div>
  )
}

TopPanel.propTypes = {
  toggleOrder: PropTypes.func.isRequired
}

export default TopPanel