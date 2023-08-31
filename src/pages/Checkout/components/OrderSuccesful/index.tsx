import { useContext } from 'react'

// assets
import Illustration from '@/assets/images/illustration.png'

// components
import { Container, IconContainer, Order, OrderDetails } from './styles'
import { ReactComponent as LocationIcon } from '@/assets/icons/map-pin-fill.svg'
import { ReactComponent as CurrencyIcon } from '@/assets/icons/currenc-dollar-regular.svg'
import { ReactComponent as ClockIcon } from '@/assets/icons/timer-fill.svg'

// contexts
import { CartContext } from '@/contexts/CartContext'
import { PaymentMethodsNames } from './types'

export function OrderSuccessful() {
  const { address, paymentMethod } = useContext(CartContext)

  const paymentMethodsNames: PaymentMethodsNames = {
    cash: 'Dinheiro',
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
  }

  return (
    <Container>
      <div>
        <Order>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <OrderDetails>
            <div>
              <IconContainer backgroundColor="purple">
                <LocationIcon />
              </IconContainer>
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {address.street}, {address.number}
                  </strong>
                </p>
                <p>
                  {address.neighborhood} - {address.city}, {address.statecode}
                </p>
              </div>
            </div>

            <div>
              <IconContainer backgroundColor="yellow">
                <ClockIcon />
              </IconContainer>
              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </div>
            </div>

            <div>
              <IconContainer backgroundColor="yellow-dark">
                <CurrencyIcon />
              </IconContainer>
              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{paymentMethodsNames[paymentMethod]}</strong>
                </p>
              </div>
            </div>
          </OrderDetails>
        </Order>
      </div>
      <div>
        <img src={Illustration} alt="" />
      </div>
    </Container>
  )
}
