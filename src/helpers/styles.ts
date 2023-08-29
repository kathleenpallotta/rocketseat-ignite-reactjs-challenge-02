import { css } from 'styled-components'
import { rootFontSize } from '@/styles/global'

export const font = (token: string) => {
  return css`
    font: ${(props) => props.theme.typography[`${token}`]};
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
