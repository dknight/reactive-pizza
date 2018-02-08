import Config from '../Config'

const calculatePrice = (ingredients=[], defaultPrice=3) =>
  ingredients
    .filter(ingr => ingr.used)
    .reduce((sum, ingr) => sum + ingr.price, defaultPrice)

export const formatPrice = num => 
  (Number.isNaN(num) || num == null) ?
  "0.00€" :
  num.toFixed(Config.FLOAT_ROUND).toString() + '€'

export default calculatePrice