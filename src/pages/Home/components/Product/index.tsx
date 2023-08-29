import { useState } from 'react'

// components
import { Button } from '@/components/Button'
import { InputNumber } from '@/components/InputNumber'
import {
  Cart,
  Container,
  Currency,
  Description,
  Footer,
  Label,
  Price,
  Title,
  Value,
} from './styles'

// types
import { ProductProps as Props } from './types'

export function Product({ description, label, title, value }: Props) {
  const [count, setCount] = useState(1)

  return (
    <Container>
      <Label>{label}</Label>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Footer>
        <Price>
          <Currency>R$</Currency>
          <Value>{value}</Value>
        </Price>
        <Cart>
          <InputNumber count={count} setCount={setCount} />
          <Button type="addToCart" />
        </Cart>
      </Footer>
    </Container>
  )
}
