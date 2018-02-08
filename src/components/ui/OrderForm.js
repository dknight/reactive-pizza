import React from 'react'
import store from '../../store'
import PropTypes from 'prop-types'
import { PriceContainer } from '../containers'
import calculatePrice, { formatPrice } from '../../lib/price-helper'
import { resetIgredients } from '../../actions'

const OrderForm = ({order, toggleOrder, submitOrder}) => {

  const onSubmit = e => {
    e.preventDefault();
    const ingredients = store.getState().ingredients.filter(ingr => ingr.used)
    const newOrder = {
      'order-name': e.target['order-name'].value,
      'order-address': e.target['order-address'].value,
      'order-email': e.target['order-email'].value,
      'order-phone': e.target['order-phone'].value,
      'order-message': e.target['order-message'].value,
      'order-ingredients': ingredients,
      'order-price': calculatePrice(ingredients)
    }

    // TODO make server request
    submitOrder(newOrder);
    store.dispatch(resetIgredients())
    
    // Tmp string to output
    let str = 'Thank you! Your order is sent to kitchen!\n'
    str += 'Order\'s data for server:\n'
    str += JSON.stringify(newOrder)
    alert(str)
  }

  return (
    <div className={`OrderForm ${order.open ? 'opened' : ''}`}>
      <div className="order-inner">
        <h2>Make order</h2>
        <button id="btn-order-close" onClick={() => toggleOrder(false)}>&times;</button>

        <table className="table-order-ingredients">
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pizza base</td>
              <td>{formatPrice(3.0)}</td>
            </tr>
            {store.getState().ingredients
              .filter(ingr => ingr.used)
              .map((ingr,i) => 
              <tr key={i}>
                <td>{ingr.name}</td>
                <td>{formatPrice(ingr.price)}</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="total-row">
              <td>Total</td>
              <td><PriceContainer/></td>
            </tr>
          </tfoot>
        </table>

        <form id="order-form" onSubmit={onSubmit}>
          <h3>Your data please:</h3>
          <input type="text" name="order-name" id="order-name" placeholder="Your name*" required/>
          <input type="tel" name="porder-hone" id="order-phone" placeholder="Phone number*" required/>
          <input type="email" name="order-email" id="order-email" placeholder="E-mail*" required/>
          <input type="address" name="order-address" id="order-address" placeholder="Delivery address*"required/>
          <textarea name="order-message" id="order-message" placeholder="Additional message"></textarea>
          <input id="btn-order-submit" type="submit" value="Send to kitchen"/>
          <p className="disclaimer">* - mandatory fields</p>
        </form>
      </div>
    </div>
  )
}

OrderForm.propTypes = {
  order:       PropTypes.object.isRequired,
  toggleOrder: PropTypes.func.isRequired,
  submitOrder: PropTypes.func.isRequired
}

export default OrderForm