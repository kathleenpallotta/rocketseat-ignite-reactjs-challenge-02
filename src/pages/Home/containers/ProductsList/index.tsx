// components
import { Product } from '@/pages/Home/components/Product'
import { Container, Content, Products, Title } from './styles'

// constants
import { PRODUCTS_LIST } from './constants'

export function ProductsList() {
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
              key={`products_list_item_${item.id}`}
            />
          ))}
        </Products>
      </Content>
    </Container>
  )
}
