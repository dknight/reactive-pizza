import ActionsTypes from './ActionsTypes'

export const useIngredient = ingr =>
  ({
    type: ActionsTypes.USE_INGREDIENT,
    ...ingr
  })

export const dropIngredient = data => {
  let retval = {
    type: ActionsTypes.DROP_INGREDIENT
  }

  if (typeof data.dropoff !== 'undefined') {
    retval = { ...retval, used: true, id: data.dropoff}
  } else {
    retval = {...retval, used: false, id: data.ingredient}
  }

  return retval
}

export const fetchIgredients = ingredients =>
  ({
    type: ActionsTypes.FETCH_INGRIDIENTS,
    ingredients
  })

export const resetIgredients = () =>
  ({
    type: ActionsTypes.RESET_INGRIDIENTS,
  })

export const toggleOrder = tgl =>
  ({
    type: ActionsTypes.ORDER_TOGGLE,
    open: tgl
  })

export const submitOrder = order =>
  ({
    type: ActionsTypes.ORDER_SUBMIT,
    ...order
  })

