import { useContext } from 'react'

// assets
import { ReactComponent as CartIcon } from '@/assets/icons/shopping-cart-fill.svg'

// contexts
import { CartContext } from '../../contexts/CartContext'

// styles
import { Container, Counter } from './styles'

export function Cart() {
  const { products } = useContext(CartContext)

  const count = products.reduce((total, currentProduct) => {
    return total + currentProduct.quantity
  }, 0)

  return (
    <Container href="/checkout">
      <Counter>
        <strong>{count}</strong>
      </Counter>
      <CartIcon />
    </Container>
  )
}
