import React from 'react'
import PropTypes from 'prop-types'
import calculatePrice, { formatPrice } from '../../lib/price-helper'
import Config from '../../Config'

const Price = ({ingredients}) => {
  const price = calculatePrice(ingredients, Config.BASE_PRICE)
  return <span className="price">{formatPrice(price)}</span>
}

Price.propTypes = {
  ingredients: PropTypes.array.isRequired
}

export default Price