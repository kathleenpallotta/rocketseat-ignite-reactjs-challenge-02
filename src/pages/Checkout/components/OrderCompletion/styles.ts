import styled from 'styled-components'

// helpers
import { color, font, toRem } from '@/helpers/styles'

// types
import { IconContainerProps, InputTextProps, PaymentOptionProps } from './types'

export const Card = styled.div`
  width: 100%;
  padding: ${toRem(40)};
  background-color: ${color('base-card')};
  border-radius: ${toRem(6)};
  display: flex;
  flex-direction: column;
  gap: ${toRem(32)};
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${toRem(8)};

  h4 {
    ${font('text-m')}
    color: ${color('base-subtitle')};
  }

  span {
    ${font('text-s')}
    color: ${color('base-text')};
  }

  svg {
    width: ${toRem(22)};
    height: ${toRem(22)};
  }
`

export const IconContainer = styled.div<IconContainerProps>`
  svg {
    color: ${({ iconColor }): string => color(iconColor)};
  }
`

export const PaymentOptions = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${toRem(12)};
`

export const Option = styled.div<PaymentOptionProps>`
  min-width: ${toRem(178)};
  display: flex;
  padding: ${toRem(16)};
  align-items: center;
  flex: 1 0 0;
  border-radius: ${toRem(6)};
  border: ${toRem(1)} solid
    ${({ selected }): string => (selected ? 'purple' : 'transparent')};
  background-color: ${({ selected }): string =>
    color(selected ? 'purple-light' : 'base-button')};
  color: ${color('base-subtitle')};
  ${font('button-s')}
  text-transform: uppercase;
  cursor: pointer;

  svg {
    width: ${toRem(16)};
    color: ${color('purple')};
  }

  &:hover {
    background-color: ${color('base-hover')};
  }

  label {
    width: 100%;
    height: ${toRem(19)};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${toRem(12)};
    cursor: pointer;

    span {
      line-height: 0px;
    }
  }

  input {
    width: 1px;
    height: 1px;
    opacity: 0;
  }
`

export const InputText = styled.div<InputTextProps>`
  width: 100%;
  max-width: ${({ width }): string => (width ? toRem(width) : 'none')};
  display: flex;
  border-radius: ${toRem(4)};
  align-items: center;
  position: relative;

  background-color: ${color('base-input')};
  border: ${toRem(1)} solid ${color('base-button')};

  input {
    width: 100%;
    height: 100%;
    padding: ${toRem(12)};
    background-color: ${color('base-input')};
    border: none;
    color: ${color('base--text')};
    ${font('text-s')}
  }
`

export const OptionalLabel = styled.span`
  color: ${color('base-label')};
  ${font('text-s')}
  font-style: italic;
  padding-right: ${toRem(12)};
`

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${toRem(16)};

  div {
    display: flex;
    flex-direction: row;
    gap: ${toRem(16)};
    position: relative;
  }
`
