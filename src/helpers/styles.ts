import { css } from 'styled-components'

export const fontText = (size: string) => {
  return css`
    ${(props) => props.theme.typography[`text-${size}`]};
  `
}

export const fontTitle = (size: string) => {
  return css`
    ${(props) => props.theme.typography[`title-${size}`]};
  `
}

export const color = (title: string) => {
  return css`
    ${(props) => props.theme.colors[title]};
  `
}
