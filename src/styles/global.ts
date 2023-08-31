import { createGlobalStyle } from 'styled-components'

// theme
import { defaultTheme } from './themes/default'

export const rootFontSize = 16
export const navbarHeight = 104

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: ${rootFontSize}px;
  }

  body {
    margin-top: ${navbarHeight}px;
    background: ${defaultTheme.colors['base-background']};
  }
`
