// components
import { Cart } from '@/components/Cart'
import { Container, Content } from './styles'
import { ReactComponent as Logo } from '@/assets/logo.svg'

export function Navbar() {
  return (
    <Container>
      <Content>
        <a href="/">
          <Logo />
        </a>
        <Cart />
      </Content>
    </Container>
  )
}
