/* eslint-disable @typescript-eslint/ban-types */
import { ReactElement } from 'react'

export type ButtonType = 'primary' | 'secondary' | 'addToCart' | 'submit'

export interface ButtonProps {
  type: ButtonType
  label?: string
  icon?: ReactElement
  action?: Function
  disabled?: boolean
}

export interface ButtonComponentProps {
  buttonType: ButtonType
  disabled?: boolean
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
    iconSize?: number
  }
}
