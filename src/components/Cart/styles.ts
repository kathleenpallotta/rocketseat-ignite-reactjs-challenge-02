import styled from 'styled-components'

// helpers
import { color, font, toRem } from '../../helpers/styles'

export const Container = styled.a`
  width: ${toRem(38)};
  height: ${toRem(38)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: ${toRem(8)};
  gap: ${toRem(4)};
  border-radius: ${toRem(6)};
  background-color: ${color('yellow-light')};
  color: ${color('yellow-dark')};
`

export const Counter = styled.span`
  width: ${toRem(20)};
  height: ${toRem(20)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: ${toRem(8)};
  border-radius: 100%;
  background-color: ${color('yellow-dark')};
  color: ${color('white')};
  font: ${font('text', 's')};
  top: ${toRem(-8)};
  right: ${toRem(-8)};
`
