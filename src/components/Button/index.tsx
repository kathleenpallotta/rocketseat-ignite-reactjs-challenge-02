// assets
import { ReactComponent as CartIcon } from '@/assets/icons/shopping-cart-fill.svg'

// styles
import * as Styled from './styles'

// types
import { ButtonProps as Props } from './types'

export function Button({ type, label, icon, action }: Props) {
  return (
    <Styled.Button type={type} onClick={() => action()}>
      {type === 'addToCart' ? <CartIcon /> : icon}
      {label}
    </Styled.Button>
  )
}
