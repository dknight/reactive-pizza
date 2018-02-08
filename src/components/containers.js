import IngredientsList from './ui/IngredientsList'
import Pizza from './ui/Pizza'
import TopPanel from './ui/TopPanel'
import OrderForm from './ui/OrderForm'
import Price from './ui/Price'
import ReactivePizzaApp from './ReactivePizzaApp'
import { useIngredient,
         dropIngredient,
         fetchIgredients,
         toggleOrder,
         submitOrder } from '../actions'
import { connect } from 'react-redux'

const stateDefaults = state => ({
  ingredients: state.ingredients,
  order: state.order
})

export const IngredientsListContainer = connect(
  state => stateDefaults(state),
  dispatch =>
    ({
      onFetch(data) {
        dispatch(fetchIgredients(data))
      },
      onUse(id) {
        dispatch(useIngredient(id))
      }
    })
)(IngredientsList)

export const PizzaContainer = connect(
  state => stateDefaults(state),
  dispatch => ({
    onDrop(id) {
      dispatch(dropIngredient(id))
    }
  })
)(Pizza)

export const TopPanelContainer = connect(
  state => ({ order: state.order }),
  dispatch => ({
    toggleOrder(tgl) {
      dispatch(toggleOrder(tgl))
    }
  })
)(TopPanel)

export const OrderFormContainer = connect(
  state => ({ order: state.order }),
  dispatch => ({
    toggleOrder(tgl) {
      dispatch(toggleOrder(tgl))
    },
    submitOrder(order) {
      dispatch(submitOrder(order))
    }
  })
)(OrderForm)

export const PriceContainer = connect(
  state => (state) => state,
  dispatch => ({})
)(Price)

export const ReactivePizzaAppContainer = connect(
  state => ({}),
  dispatch => ({
    onDrop(id) {
      dispatch(dropIngredient(id))
    }
  })
)(ReactivePizzaApp)