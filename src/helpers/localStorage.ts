// types
import { Address, Product } from '../contexts/CartContext/types'

export const getProductsFromLocalStorage = () => {
  if (!localStorage.getItem('coffee_delivery:products')) return []

  return JSON.parse(localStorage.getItem('coffee_delivery:products') || '')
}

export const setProductsToLocalStorage = (products: Product[]) => {
  return localStorage.setItem(
    'coffee_delivery:products',
    JSON.stringify(products),
  )
}

export const getPaymentMethodFromLocalStorage = () => {
  if (!localStorage.getItem('coffee_delivery:payment')) return undefined

  return localStorage.getItem('coffee_delivery:payment')
}

export const setPaymentMethodToLocalStorage = (paymentMethod: string) => {
  return localStorage.setItem('coffee_delivery:payment', paymentMethod)
}

export const getAddressFromLocalStorage = () => {
  if (!localStorage.getItem('coffee_delivery:address')) {
    return {
      neighborhood: null,
      zipcode: null,
      city: null,
      number: null,
      street: null,
      statecode: null,
      complement: null,
    }
  }

  return JSON.parse(localStorage.getItem('coffee_delivery:address') || '')
}

export const setAddressToLocalStorage = (address: Address) => {
  return localStorage.setItem(
    'coffee_delivery:address',
    JSON.stringify(address, function (key, value) {
      return value === undefined ? null : value
    }),
  )
}
