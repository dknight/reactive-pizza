import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../../lib/price-helper'
import { Draggable } from 'react-drag-and-drop'

import olive from '../../img/list-olive.svg'
import paprika from '../../img/list-paprika.svg'
import salami from '../../img/list-salami.svg'
import tomato from '../../img/list-tomato.svg'
import mushroom from '../../img/list-mushroom.svg'
import onion from '../../img/list-onion.svg'
import parsley from '../../img/list-parsley.svg'
import pineapple from '../../img/list-pineapple.svg'
import shrimp from '../../img/list-shrimp.svg'
import sauce from '../../img/list-sauce.svg'

const images = {
  olive, paprika, salami, tomato, mushroom, onion,
  parsley, pineapple, shrimp, sauce
}
const Ingredient = ({ingr, onClick}) =>
    <li className={`Ingredient ${ingr.used ? 'used' : ''}`} id={`ingredient-${ingr.id}`} onClick={onClick}>
      <Draggable type="ingredient" data={ingr.id}>
        <img className="ingredient-image" src={images[ingr.slug]} alt={ingr.name} title={ingr.name}/>
        <span className="ingredient-name">{ingr.name}</span>
        <span className="ingredient-price">{formatPrice(ingr.price)}</span>
      </Draggable>
    </li>

Ingredient.propTypes = {
  ingr:    PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Ingredient