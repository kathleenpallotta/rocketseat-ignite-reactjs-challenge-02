import styled from 'styled-components'

// constants
import { navbarHeight } from '@/styles/global'

// helpers
import { color, toRem } from '@/helpers/styles'

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
  width: 100%;
  max-width: ${toRem(1120)};
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: ${toRem(85)};
  }
`
