import React from 'react'
import {
  IngredientsListContainer,
  PizzaContainer,
  TopPanelContainer,
  OrderFormContainer }
  from './containers'
import { Droppable } from 'react-drag-and-drop'

const ReactivePizzaApp = ({onDrop}) =>
  <Droppable types={['dropoff']} onDrop={onDrop}>
    <div id="reactive-pizza-app">
      <OrderFormContainer/>
      <TopPanelContainer/>
      <div id="reactive-pizza-table">
        <PizzaContainer/>
        <IngredientsListContainer/>
      </div>
    </div>
  </Droppable>

export default ReactivePizzaApp
