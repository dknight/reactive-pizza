import React from 'react'
import deepFreeze from 'deep-freeze'
import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'

window.alert = (msg) => { console.log(msg); };
window.confirm = (msg) => { console.log(msg); };

configure({ adapter: new Adapter() })

global.React = React
global.__testIngredients__ = deepFreeze([
  {
    'id': '1',
    'name': 'Olives',
    'price': 0.45,
    'slug': 'olive',
    'used': false
  },
  {
    'id': '2',
    'name': 'Paprika',
    'price': 0.45,
    'slug': 'paprika',
    'used': false
  }, 
  {
    'id': '3',
    'name': 'Salami',
    'price': 1.1,
    'slug': 'salami',
    'used': false
  }
])

global.__testUsedIngredients__ = deepFreeze([
  {...__testIngredients__[0], used: true},
  {...__testIngredients__[1], used: true},
  {...__testIngredients__[2]}
])

global.__testOrder__ = deepFreeze({
  'order-name': 'Dima',
  'order-email': 'smirnov.dmitri@gmail.com',
  'order-address': 'Hello, World 13',
  'order-phone': '+372 777 8888',
  'order-message': 'Deliver fast please!',
  'ingredients' : [...__testIngredients__],
  'price': 5,
  'open': false
})
