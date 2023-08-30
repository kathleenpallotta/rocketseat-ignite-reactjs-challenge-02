import styled from 'styled-components'

// helpers
import { color, font, toRem } from '@/helpers/styles'

const smallScreenBreakpoint = '1120px'

export const Container = styled.div`
  width: 100%;
  background-color: ${color('base-background')};
  padding: ${toRem(32)} 0 ${toRem(157)} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: ${toRem(1120)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Products = styled.div`
  margin: ${toRem(54)} auto 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${toRem(52)} ${toRem(32)};
`

export const Title = styled.h2`
  ${font('title-l')}
  color: ${color('base-subtitle')};
  width: 100%;

  @media screen and (max-width: ${smallScreenBreakpoint}) {
    text-align: center;
  }
`
