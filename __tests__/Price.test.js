import Price from '../src/components/ui/Price'
import calculatePrice from '../src/lib/price-helper'
import { formatPrice } from '../src/lib/price-helper'
import { shallow } from 'enzyme'

describe('Price', () => {

  it ('should render price', () => {
    expect(
      shallow(<Price ingredients={[]}/>)
        .find('span')
        .length
    ).toBe(1)
  })

  it ('should render correct price', () => {
    const price = calculatePrice(['1', '2', '3'], __testIngredients__)
    expect(
      shallow(<Price ingredients={[]}/>)
          .find('span')
          .text()
      )
    .toMatch("3.00€")
  })

  it ('should format price', () => {
    expect(formatPrice(2.3)).toMatch("2.30€");
  })

  it ('should return 0.00 for nall or null', () => {
    expect(formatPrice(NaN)).toMatch("0.00€");
    expect(formatPrice(null)).toMatch("0.00€");
  })
})