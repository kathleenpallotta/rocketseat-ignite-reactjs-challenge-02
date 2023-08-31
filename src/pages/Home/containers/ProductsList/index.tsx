import { useContext } from 'react'

// components
import { Product } from '@/components/Product'
import { Container, Content, Products, Title } from './styles'

// constants
import { PRODUCTS_LIST } from './constants'

// contexts
import { CartContext } from '@/contexts/CartContext'

export function ProductsList() {
  const { products, setProducts } = useContext(CartContext)

  function getItemQuantity(id: number) {
    const productIndex = products.findIndex((item) => item.id === id)

    if (productIndex === -1) return 0

    return products[productIndex].quantity
  }

  return (
    <Container>
      <Content>
        <Title>Nosso cafés</Title>
        <Products>
          {PRODUCTS_LIST.map((item) => (
            <Product
              description={item.description}
              id={item.id}
              image={item.image}
              labels={item.labels}
              title={item.title}
              value={item.value}
              quantity={getItemQuantity(item.id)}
              key={`products_list_item_${item.id}`}
            />
          ))}
        </Products>
      </Content>
    </Container>
  )
}
