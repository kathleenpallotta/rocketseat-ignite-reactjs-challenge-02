import { createGlobalStyle } from 'styled-components'

export const rootFontSize = 16

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: ${rootFontSize}px;
  }

  body {
    background: #fafafa
  }
`
