import { ReactElement } from 'react'

export interface IconContainerProps {
  iconColor: string
}

export interface PaymentOptionProps {
  selected?: boolean
}

export interface PaymentMethod {
  name: string
  hash: string
  icon: ReactElement
  selected: boolean
}

export interface InputTextProps {
  width?: number
  optional?: boolean
}

export interface AddressItem {
  name: string
  maxWidth?: number
  maxLength?: number
  placeholder: string
  optional?: boolean
}
