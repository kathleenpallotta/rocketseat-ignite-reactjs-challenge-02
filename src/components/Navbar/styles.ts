import styled from 'styled-components'

// constants
import { navbarHeight } from '@/styles/global'

// helpers
import { color, font, toRem, containerWidth } from '@/helpers/styles'

export const Container = styled.div`
  width: 100%;
  height: ${toRem(navbarHeight)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${toRem(32)} ${toRem(24)};
  background: ${color('base-background')};
  z-index: 1;
`

export const Content = styled.nav`
  ${containerWidth()}
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: ${toRem(85)};
  }

  div {
    display: flex;
    align-items: center;
    gap: ${toRem(12)};
  }
`

export const LocationLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${toRem(8)};
  height: ${toRem(38)};
  gap: ${toRem(4)};
  border-radius: ${toRem(6)};
  background-color: ${color('purple-light')};
  color: ${color('purple-dark')};
  ${font('text-s')}

  svg {
    width: ${toRem(22)};
    height: ${toRem(22)};
    color: ${color('purple')};
  }
`
