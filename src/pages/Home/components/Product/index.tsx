import { useState, useContext } from 'react'

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
import { CartContext } from '@/contexts/CartContext'

export function Product({
  description,
  labels,
  title,
  value,
  image,
  id,
}: Props) {
  const [quantity, setQuantity] = useState(1)
  const { setProducts } = useContext(CartContext)

  return (
    <Container>
      <img src={image} alt={title} />
      {labels.map((label, key) => (
        <Label key={`product_${id}_label_${key}`}>{label}</Label>
      ))}

      <Title>{title}</Title>
      <Description>{description}</Description>
      <Footer>
        <Price>
          <Currency>R$</Currency>
          <Value>
            {value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </Value>
        </Price>
        <Cart>
          <InputNumber count={quantity} setCount={setQuantity} />
          <Button
            action={() => {
              setProducts((previousState) => {
                const updatedCart = previousState.map((product) => {
                  if (product.id === id) {
                    return {
                      ...product,
                      quantity,
                    }
                  }

                  return product
                })

                if (!updatedCart.some((product) => product.id === id)) {
                  updatedCart.push({
                    id,
                    value,
                    title,
                    quantity,
                    image,
                  })
                }

                return updatedCart
              })
            }}
            type="addToCart"
          />
        </Cart>
      </Footer>
    </Container>
  )
}
