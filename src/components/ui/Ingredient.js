import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../../lib/price-helper'
import { Draggable } from 'react-drag-and-drop'

const Ingredient = ({ingr, onClick}) =>
    <li className={`Ingredient ${ingr.used ? 'used' : ''}`} id={`ingredient-${ingr.id}`} onClick={onClick}>
      <Draggable type="ingredient" data={ingr.id}>
        <img className="ingredient-image" src={`/img/list-${ingr.slug}.svg`} alt={ingr.name} title={ingr.name}/>
        <span className="ingredient-name">{ingr.name}</span>
        <span className="ingredient-price">{formatPrice(ingr.price)}</span>
      </Draggable>
    </li>

Ingredient.propTypes = {
  ingr:    PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Ingredient