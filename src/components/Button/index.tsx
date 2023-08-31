// assets
import { ReactComponent as CartIcon } from '@/assets/icons/shopping-cart-fill.svg'

// styles
import * as Styled from './styles'

// types
import { ButtonProps as Props } from './types'

export function Button({ type, label, icon, action, disabled = false }: Props) {
  function handleClick() {
    if (!action) return

    action()
  }
  return (
    <Styled.Button
      disabled={disabled}
      type={!action ? 'submit' : 'button'}
      buttonType={type}
      onClick={() => handleClick()}
    >
      {type === 'addToCart' ? <CartIcon /> : icon}
      {label}
    </Styled.Button>
  )
}
