import React from 'react'
import PropTypes from 'prop-types'
import { Droppable, Draggable } from 'react-drag-and-drop'

const Pizza = ({ingredients, onDrop}) =>
    <div id="Pizza-container">
      <Droppable types={['ingredient']} onDrop={onDrop}>
        <div>
          <div id="Pizza-base">
            {ingredients.filter(ingr => ingr.used).map(ingr =>
              <Draggable key={ingr.id} type="dropoff" data={ingr.id}> 
                <div className={`Pizza-ingredient Pizza-ingredient-${ingr.id}`}></div>
              </Draggable>
            )}
          </div>
        </div>
      </Droppable>
    </div>

Pizza.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onDrop:      PropTypes.func.isRequired
}

export default Pizza