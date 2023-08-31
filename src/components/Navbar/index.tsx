/* eslint-disable camelcase */
import { useContext } from 'react'

// components
import { Cart } from '@/components/Cart'
import { Container, Content, LocationLabel } from './styles'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { ReactComponent as LocationIcon } from '@/assets/icons/map-pin-fill.svg'

// contexts
import { CartContext } from '@/contexts/CartContext'

export function Navbar() {
  const { address } = useContext(CartContext)
  const userLocation =
    address.city && address.uf
      ? `${address.city}, ${address.uf}`
      : undefined

  return (
    <Container>
      <Content>
        <a href="/">
          <Logo />
        </a>
        <div>
          {userLocation && (
            <LocationLabel>
              <LocationIcon />
              {userLocation}
            </LocationLabel>
          )}
          <Cart />
        </div>
      </Content>
    </Container>
  )
}
