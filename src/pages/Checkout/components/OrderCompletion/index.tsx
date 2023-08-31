import { useContext, useState, useEffect } from 'react'

// components
import { ReactComponent as LocationIcon } from '@/assets/icons/map-pin-line-regular.svg'
import { ReactComponent as CurrencyIcon } from '@/assets/icons/currenc-dollar-regular.svg'
import { ReactComponent as CreditCardIcon } from '@/assets/icons/credit-card-regular.svg'
import { ReactComponent as BankIcon } from '@/assets/icons/bank-regular.svg'
import { ReactComponent as CashIcon } from '@/assets/icons/money-regular.svg'
import {
  AddressForm,
  Card,
  CardHeader,
  IconContainer,
  InputText,
  Option,
  OptionalLabel,
  PaymentOptions,
} from './styles'

// contexts
import { CartContext } from '@/contexts/CartContext'

// helpers
import {
  getPaymentMethodFromLocalStorage,
  setPaymentMethodToLocalStorage,
  setAddressToLocalStorage,
} from '@/helpers/localStorage'

// types
import { PaymentMethod } from './types'

export function OrderCompletion() {
  const { address, setAddress, paymentMethod, setPaymentMethod } =
    useContext(CartContext)

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      name: 'Cartão de crédito',
      hash: 'credit',
      icon: <CreditCardIcon />,
      selected: false,
    },
    {
      name: 'Cartão de débito',
      hash: 'debit',
      icon: <BankIcon />,
      selected: false,
    },
    {
      name: 'Dinheiro',
      hash: 'cash',
      icon: <CashIcon />,
      selected: false,
    },
  ])

  function handlePaymentMethod(selectedMethod: string) {
    setPaymentMethods((previousState) => {
      const updatedState = previousState.map((item) => {
        if (item.hash !== selectedMethod) {
          return {
            ...item,
            selected: false,
          }
        }

        return {
          ...item,
          selected: true,
        }
      })

      return updatedState
    })

    setPaymentMethod(selectedMethod)
  }

  function handleAddress(item: EventTarget & HTMLInputElement) {
    const maskedValue = handleMask(item)

    item.value = maskedValue

    Object.keys(address).forEach((key) => {
      if (key === item.name) {
        setAddress((previousState) => {
          return {
            ...previousState,
            [key]: maskedValue,
          }
        })
      }
    })
  }

  function handleMask(target: EventTarget & HTMLInputElement) {
    if (!target.value) return ''

    const { value, name } = target

    let maskedValue = ''

    switch (name) {
      case 'zipcode':
        maskedValue = value.replace(/\D/g, '')
        maskedValue = maskedValue.replace(/(\d{5})(\d)/, '$1-$2')
        break
      case 'number':
        maskedValue = value.replace(/\D/g, '')
        break
      case 'statecode':
        maskedValue = value.replace(/[0-9]/g, '')
        if (
          maskedValue.length === 2 &&
          /(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO|BR)/gm.test(
            maskedValue,
          ) === false
        ) {
          maskedValue = ''
          break
        }
        maskedValue = maskedValue.toUpperCase()
        break
      default:
        return value
    }

    return maskedValue
  }

  useEffect(() => {
    if (!paymentMethod) return

    handlePaymentMethod(paymentMethod)
  }, [])

  useEffect(() => {
    setAddressToLocalStorage(address)
  }, [address])

  useEffect(() => {
    setPaymentMethodToLocalStorage(paymentMethod)
  }, [paymentMethod])

  return (
    <>
      <Card>
        <CardHeader>
          <IconContainer iconColor="yellow-dark">
            <LocationIcon />
          </IconContainer>
          <div>
            <h4>Endereço de Entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </CardHeader>
        <AddressForm>
          <InputText width={200}>
            <input
              onChange={(e) => handleAddress(e?.target)}
              defaultValue={address.zipcode}
              type="text"
              placeholder="CEP"
              minLength={9}
              maxLength={9}
              name="zipcode"
              required
            />
          </InputText>
          <InputText>
            <input
              onChange={(e) => handleAddress(e?.target)}
              defaultValue={address.street}
              type="text"
              placeholder="Rua"
              name="street"
              required
            />
          </InputText>
          <div>
            <InputText width={200}>
              <input
                onChange={(e) => handleAddress(e?.target)}
                defaultValue={address.number}
                type="text"
                placeholder="Número"
                maxLength={4}
                name="number"
                required
              />
            </InputText>
            <InputText>
              <input
                onChange={(e) => handleAddress(e?.target)}
                defaultValue={address.complement}
                type="text"
                placeholder="Complemento"
                name="complement"
              />
              <OptionalLabel>Opcional</OptionalLabel>
            </InputText>
          </div>
          <div>
            <InputText width={200}>
              <input
                onChange={(e) => handleAddress(e?.target)}
                defaultValue={address.neighborhood}
                type="text"
                placeholder="Bairro"
                name="neighborhood"
                required
              />
            </InputText>
            <InputText width={276}>
              <input
                onChange={(e) => handleAddress(e?.target)}
                defaultValue={address.city}
                type="text"
                placeholder="Cidade"
                name="city"
                required
              />
            </InputText>
            <InputText width={60}>
              <input
                onChange={(e) => handleAddress(e?.target)}
                defaultValue={address.statecode}
                type="text"
                placeholder="UF"
                minLength={2}
                maxLength={2}
                name="statecode"
                required
              />
            </InputText>
          </div>
        </AddressForm>
      </Card>

      <Card>
        <CardHeader>
          <IconContainer iconColor="purple">
            <CurrencyIcon />
          </IconContainer>
          <div>
            <h4>Pagamento</h4>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </CardHeader>
        <PaymentOptions>
          {paymentMethods.map((method, idx) => (
            <Option
              onClick={() => handlePaymentMethod(method.hash)}
              selected={method.selected}
              key={`payment_method_list_item_${idx}`}
            >
              <input
                onChange={() => {}}
                checked={method.selected}
                name="payment"
                type="radio"
                required
              />
              <label htmlFor="payment">
                {method.icon}
                <span>{method.name}</span>
              </label>
            </Option>
          ))}
        </PaymentOptions>
      </Card>
    </>
  )
}
