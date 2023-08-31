/* eslint-disable camelcase */
import { useState, useEffect, useCallback } from 'react'

// router
import { BrowserRouter } from 'react-router-dom'

// theme
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

// components
import { Navbar } from './components/Navbar'
import { Router } from './Router'

// contexts
import { CartContext } from './contexts/CartContext'

// helpers
import {
  getAddressFromLocalStorage,
  getPaymentMethodFromLocalStorage,
  getProductsFromLocalStorage,
  setProductsToLocalStorage,
} from './helpers/localStorage'
import isPropValid from '@emotion/is-prop-valid'

// styles
import { GlobalStyle } from './styles/global'

// types
import { Address, Product } from './contexts/CartContext/types'

function App() {
  const [products, setProducts] = useState<Product[]>(
    getProductsFromLocalStorage(),
  )

  const [address, setAddress] = useState<Address>(getAddressFromLocalStorage())

  const [orderSuccessful, setOrderAsSuccesful] = useState(false)

  const [paymentMethod, setPaymentMethod] = useState<string | undefined>(
    getPaymentMethodFromLocalStorage() || undefined,
  )

  const getCurrentCity = useCallback(() => {
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${
      import.meta.env.REACT_APP_IP_GEO_LOCATION_API_KEY
    }`

    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (!data.city || !data.state_code) return

          const { city, state_code } = data

          setAddress((previousState) => {
            return {
              ...previousState,
              city,
              statecode: state_code.slice(-2),
            }
          })
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getCurrentCity()
  }, [getCurrentCity])

  useEffect(() => {
    setProductsToLocalStorage(products)
  }, [products])

  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === 'string'
          ? isPropValid(propName)
          : true
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <CartContext.Provider
          value={{
            products,
            setProducts,
            address,
            setAddress,
            paymentMethod,
            setPaymentMethod,
            orderSuccessful,
            setOrderAsSuccesful,
          }}
        >
          <Navbar />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartContext.Provider>
        <GlobalStyle />
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default App
