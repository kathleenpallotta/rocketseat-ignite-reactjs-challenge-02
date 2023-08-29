// assets
import { ReactComponent as CartIcon } from '@/assets/icons/shopping-cart-fill.svg'

// styles
import * as Styled from './styles'

// types
import { ButtonProps as Props } from './types'

export function Button({ type, label, icon }: Props) {
  return (
    <Styled.Button type={type}>
      {type === 'addToCart' ? <CartIcon /> : icon}
      {label}
    </Styled.Button>
  )
}
