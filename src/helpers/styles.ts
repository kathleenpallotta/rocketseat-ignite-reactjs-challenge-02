import { css } from 'styled-components'
import { rootFontSize } from '../styles/global'

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

export const fontButton = (size: string) => {
  return css`
    ${(props) => props.theme.typography[`button-${size}`]};
  `
}

export const color = (title: string) => {
  return css`
    ${(props) => props.theme.colors[title]};
  `
}

export const toRem = (value: number) => {
  return `${value / rootFontSize}rem`
}
