// assets
import { ReactComponent as CartIcon } from '@/assets/icons/shopping-cart-fill.svg'

// styles
import { Container, Counter } from './styles'

export function Cart() {
  return (
    <Container href="/checkout">
      <Counter>
        <strong>3</strong>
      </Counter>
      <CartIcon />
    </Container>
  )
}
