import styled from 'styled-components'

import { color, containerWidth, font, toRem } from '@/helpers/styles'

export const FormContainer = styled.form`
  ${containerWidth()}
  margin: ${toRem(40)} auto 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${toRem(32)};
`

export const Title = styled.h3`
  ${font('title-xs')}
  color: ${color('base-subtitle')};
`

export const OrderCompletionContainer = styled.div`
  width: 100%;
  max-width: ${toRem(640)};
  display: flex;
  flex-direction: column;
  gap: ${toRem(12)};
  margin: auto;
`

export const OrderSummaryContainer = styled.div`
  width: 100%;
  max-width: ${toRem(448)};
  display: flex;
  flex-direction: column;
  gap: ${toRem(12)};
  margin: 0 auto;
`
