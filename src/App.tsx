import { useState } from 'react'

// router
import { BrowserRouter } from 'react-router-dom'

// theme
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

// components
import { Navbar } from './components/Navbar'
import { Router } from './Router'

// contexts
import { CartContext } from './contexts/CartContext'

// styles
import { GlobalStyle } from './styles/global'

// types
import { Product } from './contexts/CartContext/types'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContext.Provider
        value={{
          products,
          setProducts,
        }}
      >
        <Navbar />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContext.Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
