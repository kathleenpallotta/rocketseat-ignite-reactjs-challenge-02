// styles
import * as Styled from './styles'

// types
import { ButtonProps as Props } from './types'

export function Button({ type, label, icon }: Props) {
  return (
    <Styled.Button type={type}>
      {icon}
      {label}
    </Styled.Button>
  )
}
