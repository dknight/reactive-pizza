import React from 'react'
import Ingredient from './Ingredient'
import PropTypes from 'prop-types'

const IngredientsList = ({ingredients, onUse}) =>
  <div id="ingredients-list-container">
    <h2>Ingredients</h2>
    <ul className="IngredientList">
      {ingredients.map((ingr, i) =>
        <Ingredient key={i} ingr={ingr} onClick={() => onUse(ingr)}/>
      )}
    </ul>
  </div>

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onUse:       PropTypes.func.isRequired
}

IngredientsList.defaultProps = {
  ingredients: [],
  onUse:       () => {}
}

export default IngredientsList