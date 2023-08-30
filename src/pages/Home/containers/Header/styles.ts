import styled from 'styled-components'

// assets
import Background from '@/assets/images/background.png'

// helpers
import { color, font, toRem } from '@/helpers/styles'

// types
import { IconProps } from './types'

const smallScreenBreakpoint = '1025px'

export const Container = styled.header`
  width: 100%;
  background-image: url(${Background});
  background-color: ${color('base-background')};
  background-size: cover;
  background-position: top;
  padding: ${toRem(92)} 0;

  @media screen and (max-width: ${smallScreenBreakpoint}) {
    padding: 0;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: ${toRem(1120)};
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap-reverse;

  @media screen and (max-width: ${smallScreenBreakpoint}) {
    padding: ${toRem(24)};
  }

  img {
    width: 100%;
    max-width: ${toRem(476)};
    margin: auto;
  }
`

export const Title = styled.h1`
  color: ${color('base-title')};
  ${font('title-xl')}
`

export const Description = styled.p`
  ${font('text-l')}
  color: ${color('base-subtitle')};
`

export const TextContainer = styled.div`
  width: 100%;
  max-width: ${toRem(588)};
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: ${toRem(16)};
`

export const Benefits = styled.div`
  width: 100%;
  display: grid;
  margin-top: ${toRem(50)};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: ${toRem(20)};

  @media screen and (max-width: ${smallScreenBreakpoint}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: ${toRem(12)};
  color: ${color('base-text')};
  ${font('text-m')}
`

export const Icon = styled.div<IconProps>`
  width: ${toRem(32)};
  height: ${toRem(32)};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }): string => color(backgroundColor)};

  svg {
    width: ${toRem(16)};
    height: ${toRem(16)};
    color: ${color('base-background')};
  }
`
