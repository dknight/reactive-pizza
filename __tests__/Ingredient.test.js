import { shallow, mount } from 'enzyme'
import Ingredient from '../src/components/ui/Ingredient'

describe('Ingredient UI Component', () => {

  const defaultProps = {
    id: 'ID11',
    name: 'MOCK_INGREDIENT',
    slug: 'mockmock',
    price: 2.33,
    used: false
  }

  let _click
  let _ingredient
  
  beforeAll(() => {
    _click = jest.fn()
    _ingredient = <Ingredient ingr={defaultProps} onClick={_click}/>
  })

  it('renders ingredient list item', () =>
    expect(shallow(_ingredient).find('li').length).toBe(1)
  )

  it('invokes click', () => {
    shallow(_ingredient).find('li').simulate('click')
    expect(_click).toBeCalled()
  })

  it('has image', () => {mount
    expect(shallow(_ingredient).find('img').length).toBe(1)
  }) 
  it('hasn\'t to be used', () => {
    const mock = mount(_ingredient)
    mock.find('li').simulate('click')
    const props = mock.props()
    expect(props.ingr.used).toBe(false)
  })
})