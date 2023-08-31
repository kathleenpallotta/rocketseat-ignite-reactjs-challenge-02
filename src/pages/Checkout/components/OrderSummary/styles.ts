import { styled } from 'styled-components'

// helpers
import { color, font, toRem } from '@/helpers/styles'

export const Card = styled.div`
  width: 100%;
  padding: ${toRem(40)};
  background-color: ${color('base-card')};
  border-radius: ${toRem(6)} ${toRem(44)};
  display: flex;
  flex-direction: column;
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${toRem(24)};
  margin-top: ${toRem(12)};
`

export const TotalSum = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${font('text-l')}
  font-weight: bold;
  color: ${color('base-subtitle')};
`

export const Totals = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${font('text-s')}
  color: ${color('base-text')};
`

export const TotalsRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${toRem(12)};
  padding-top: ${toRem(24)};
  border-top: ${toRem(1)} solid ${color('base-button')};
`
