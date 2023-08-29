import styled from 'styled-components'

// helpers
import { color, font, toRem } from '@/helpers/styles'

export const Container = styled.div`
  width: ${toRem(72)};
  height: ${toRem(32)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${toRem(4)};
  border-radius: ${toRem(6)};
  background-color: ${color('base-button')};
  ${font('text-m')}
`

export const Counter = styled.span`
  color: ${color('base-title')};
`

export const Button = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${color('purple')};

  svg {
    width: ${toRem(14)};
  }
`
