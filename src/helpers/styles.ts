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

export const containerWidth = () => {
  return css`
    width: 100%;
    max-width: ${toRem(1120)};
  `
}

export const gradient = (colors: string[], angle: number = 0) => {
  return css`
    ${(props) => {
      let gradient = `${angle}deg,`
      gradient = gradient + colors.map((item) => props.theme.colors[item])
      gradient.replace('#', ',#')

      return gradient
    }}
  `
}
