import { css } from 'styled-components'
import { rootFontSize } from '../styles/global'

export const font = (sufix: string, size: string) => {
  return css`
    ${(props) => props.theme.typography[`${sufix}-${size}`]};
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
