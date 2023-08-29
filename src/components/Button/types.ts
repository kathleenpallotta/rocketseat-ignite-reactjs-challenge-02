import { ReactElement } from 'react'

export type ButtonType = 'primary' | 'secondary' | 'addToCart'

export interface ButtonProps {
  type: ButtonType
  label?: string
  icon?: ReactElement
}

export interface ButtonComponentProps {
  type: ButtonType
}

export interface ButtonComponentColors {
  [key: string]: {
    label: string
    labelHover?: string
    background: string
    backgroundHover: string
    icon: string
    iconHover?: string
    iconSize?: string
  }
}

export interface ButtonSizing {
  [key: string]: {
    padding: string
  }
}
