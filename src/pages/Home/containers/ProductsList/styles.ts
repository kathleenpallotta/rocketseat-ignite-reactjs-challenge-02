import styled from 'styled-components'

// helpers
import { color, containerWidth, font, toRem } from '@/helpers/styles'

const smallScreenBreakpoint = '1120px'

export const Container = styled.div`
  width: 100%;
  padding: ${toRem(32)} 0 ${toRem(157)} 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  ${containerWidth()}
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
  justify-content: flex-start;
  gap: ${toRem(52)} ${toRem(32)};

  @media screen and (max-width: ${smallScreenBreakpoint}) {
    justify-content: center;
  }
`

export const Title = styled.h2`
  ${font('title-l')}
  color: ${color('base-subtitle')};
  width: 100%;

  @media screen and (max-width: ${smallScreenBreakpoint}) {
    text-align: center;
  }
`
