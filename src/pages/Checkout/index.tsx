import { FormEvent, useContext } from 'react'

// components
import { OrderCompletion } from './components/OrderCompletion'
import { OrderSummary } from './components/OrderSummary'
import { OrderSuccessful } from './components/OrderSuccesful'
import {
  FormContainer,
  OrderCompletionContainer,
  OrderSummaryContainer,
  Title,
} from './styles'

// contexts
import { CartContext } from '@/contexts/CartContext'

export function Checkout() {
  const { orderSuccessful, setOrderAsSuccesful, setProducts } =
    useContext(CartContext)

  function handleCheckout(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setOrderAsSuccesful(true)
    setProducts([])
  }

  if (orderSuccessful) {
    return <OrderSuccessful />
  }

  return (
    <FormContainer onSubmit={(e) => handleCheckout(e)}>
      <OrderCompletionContainer>
        <Title>Complete seu pedido</Title>
        <OrderCompletion />
      </OrderCompletionContainer>
      <OrderSummaryContainer>
        <Title>Cafés selecionados</Title>
        <OrderSummary />
      </OrderSummaryContainer>
    </FormContainer>
  )
}
