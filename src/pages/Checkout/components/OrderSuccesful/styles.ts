import { styled } from 'styled-components'

// helpers
import { color, containerWidth, font, gradient, toRem } from '@/helpers/styles'

// types
import { IconContainerProps } from './types'

const smallScreenBreakpoint = '1025px'

export const Container = styled.div`
  ${containerWidth()}
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin: auto;

  @media screen and (max-width: ${smallScreenBreakpoint}) {
    justify-content: center;
    gap: ${toRem(40)};
    padding: ${toRem(24)};
  }
`

export const Order = styled.div`
  h1 {
    ${font('title-l')}
    color: ${color('yellow-dark')};
  }

  p {
    ${font('text-l')}
    color: ${color('base-subtitle')};
  }
`

export const OrderDetails = styled.div`
  width: 100%;
  max-width: ${toRem(526)};
  display: flex;
  flex-direction: column;
  padding: ${toRem(40)};
  gap: ${toRem(32)};
  margin-top: ${toRem(40)};
  border-radius: ${toRem(6)} ${toRem(36)};
  background-color: ${color('base-background')};
  border: ${toRem(1)} solid transparent;
  position: relative;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${toRem(12)};
  }

  p {
    ${font('text-m')}
  }

  img {
    width: 100%;
    max-width: ${toRem(492)};
  }

  &:after {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 5px);
    border-radius: ${toRem(6)} ${toRem(36)};
    background: linear-gradient(${gradient(['yellow', 'purple'], 90)});
    top: ${toRem(-3)};
    left: ${toRem(-2)};
    z-index: -1;
  }
`

export const IconContainer = styled.div<IconContainerProps>`
  width: ${toRem(32)};
  height: ${toRem(32)};
  display: flex;
  border-radius: 100%;
  color: ${color('base-background')};
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }): string => color(backgroundColor)};

  svg {
    width: ${toRem(16)};
    height: ${toRem(16)};
  }
`
