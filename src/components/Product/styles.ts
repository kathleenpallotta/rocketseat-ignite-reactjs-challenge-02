import { styled } from 'styled-components'
import { color, font, toRem } from '@/helpers/styles'

// helpers

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${toRem(24)} 0;
  border-bottom: ${toRem(1)} solid ${color('base-button')};

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    border-bottom: none;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${toRem(20)};

  img {
    width: ${toRem(64)};
    height: ${toRem(64)};
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${color('base-subtitle')};
    ${font('text-m')}
    gap: ${toRem(4)};
  }
`

export const Total = styled.span`
  ${font('text-m')}
  font-weight: bold;
  color: ${color('base-text')};
`

export const Container = styled.div`
  border-radius: ${`${toRem(6)} ${toRem(36)}`};
  background-color: ${color('base-card')};
  width: ${toRem(256)};
  height: ${toRem(310)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: ${toRem(20)};
  position: relative;

  img {
    position: absolute;
    width: ${toRem(120)};
    top: ${toRem(-30)};
  }
`

export const Label = styled.span`
  display: flex;
  padding: ${toRem(4)} ${toRem(8)};
  ${font('tag')}
  text-transform: uppercase;
  color: ${color('yellow-dark')};
  background-color: ${color('yellow-light')};
  border-radius: ${toRem(100)};
  margin: ${toRem(8)} auto;
`

export const Title = styled.span`
  color: ${color('base-subtitle')};
  ${font('title-s')}
  margin: ${toRem(8)} auto;
`

export const Description = styled.span`
  ${font('text-s')}
  color: ${color('base-label')};
  text-align: center;
  margin: ${toRem(8)} auto;
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${toRem(25)};
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${toRem(4)};
`

export const Currency = styled.span`
  ${font('text-s')}
  color: ${color('base-text')};
`

export const Value = styled.span`
  ${font('title-m')}
  color: ${color('base-text')};
`

export const Cart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${toRem(8)};
`

export const LabelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${toRem(4)};
`
