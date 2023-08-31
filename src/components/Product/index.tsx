import { useContext, useEffect, useState } from 'react'

// components
import {
  Card,
  Cart,
  Container,
  Currency,
  Description,
  Footer,
  Label,
  LabelsContainer,
  Price,
  ProductDetails,
  Title,
  Total,
  Value,
} from './styles'
import { InputNumber } from '@/components/InputNumber'
import { ReactComponent as TrashIcon } from '@/assets/icons/trash-regular.svg'

// contexts
import { CartContext } from '@/contexts/CartContext'

// helpers
import { convertToBRLCurrency } from '@/helpers/format'
import { setProductsToLocalStorage } from '@/helpers/localStorage'

// types
import { ProductProps as Props } from './types'
import { Button } from '../Button'

export function Product({
  title,
  image,
  quantity,
  value,
  id,
  shortVersion = false,
  description,
  labels,
}: Props) {
  const { products, setProducts } = useContext(CartContext)

  const [productQuantity, setProductQuantity] = useState(quantity)

  function handleQuantityUpdate() {
    if (productQuantity === 0) return

    setProducts((previousState) => {
      const updatedCart = previousState.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: productQuantity,
          }
        }

        return product
      })

      if (!updatedCart.some((product) => product.id === id)) {
        updatedCart.push({
          id,
          value,
          title,
          quantity: productQuantity,
          image,
        })
      }

      return updatedCart
    })
  }

  function handleItemRemoval() {
    setProducts((previousState) => {
      if (previousState.length === 1) {
        setProductsToLocalStorage([])
      }

      return previousState.filter((item) => item.id !== id)
    })
  }

  useEffect(() => {
    if (!shortVersion) return

    handleQuantityUpdate()
  }, [productQuantity])

  if (shortVersion) {
    return (
      <Card>
        <ProductDetails>
          <img src={image} alt={title} />
          <div>
            <span>{title}</span>
            <Cart>
              <InputNumber
                count={productQuantity}
                setCount={setProductQuantity}
              />
              <Button
                action={() => handleItemRemoval()}
                type="secondary"
                icon={<TrashIcon />}
                label="Remover"
              />
            </Cart>
          </div>
        </ProductDetails>
        <Total>R$ {convertToBRLCurrency(quantity * value)}</Total>
      </Card>
    )
  }

  return (
    <Container>
      <img src={image} alt={title} />
      {labels && (
        <LabelsContainer>
          {labels.map((label, idx) => (
            <Label key={`product_${id}_label_${idx}`}>{label}</Label>
          ))}
        </LabelsContainer>
      )}

      <Title>{title}</Title>
      <Description>{description}</Description>
      <Footer>
        <Price>
          <Currency>R$</Currency>
          <Value>{convertToBRLCurrency(value)}</Value>
        </Price>
        <Cart>
          <InputNumber count={productQuantity} setCount={setProductQuantity} />
          <Button action={() => handleQuantityUpdate()} type="addToCart" />
        </Cart>
      </Footer>
    </Container>
  )
}
