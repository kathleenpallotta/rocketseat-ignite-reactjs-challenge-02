// assets
import HeroImage from '@/assets/images/hero.png'

// components
import {
  Benefits,
  Container,
  Content,
  Item,
  Description,
  TextContainer,
  Title,
  Icon,
} from './styles'

import { ReactComponent as CartIcon } from '@/assets/icons/shopping-cart-fill.svg'
import { ReactComponent as PackageIcon } from '@/assets/icons/package-fill.svg'
import { ReactComponent as ClockIcon } from '@/assets/icons/timer-fill.svg'
import { ReactComponent as CoffeeIcon } from '@/assets/icons/coffee-fill.svg'

// types
import { Benefit } from './types'

export function Header() {
  const benefits: Benefit[] = [
    {
      description: 'Compra simples e segura',
      backgroundColor: 'yellow-dark',
      icon: <CartIcon />,
    },
    {
      description: 'Embalagem mantém o café intacto',
      backgroundColor: 'base-text',
      icon: <PackageIcon />,
    },
    {
      description: 'Entrega rápida e rastreada',
      backgroundColor: 'yellow',
      icon: <ClockIcon />,
    },
    {
      description: 'O café chega fresquinho até você',
      backgroundColor: 'purple',
      icon: <CoffeeIcon />,
    },
  ]

  return (
    <Container>
      <Content>
        <TextContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Description>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Description>
          <Benefits>
            {benefits.map((benefit, idx) => (
              <Item key={`benefits_list_item_${idx}`}>
                <Icon backgroundColor={benefit.backgroundColor}>
                  {benefit.icon}
                </Icon>
                {benefit.description}
              </Item>
            ))}
          </Benefits>
        </TextContainer>
        <img src={HeroImage} alt="Coffee Delivery" />
      </Content>
    </Container>
  )
}
