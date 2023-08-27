import styled, { RuleSet } from 'styled-components'

// helpers
import { color, fontButton, toRem } from '../../helpers/styles'

// types
import {
  ButtonComponentColors,
  ButtonComponentProps,
  ButtonSizing,
} from './types'

const buttonColors: ButtonComponentColors = {
  primary: {
    label: 'white',
    background: 'yellow',
    backgroundHover: 'yellow-dark',
    icon: 'white',
  },
  secondary: {
    label: 'base-text',
    labelHover: 'base-subtitle',
    background: 'base-button',
    backgroundHover: 'base-hover',
    icon: 'purple',
    iconHover: 'purple-dark',
  },
  icon: {
    label: 'base-card',
    background: 'purple-dark',
    backgroundHover: 'purple',
    icon: 'white',
  },
}

const buttonSizing: ButtonSizing = {
  primary: {
    padding: `${toRem(12)} ${toRem(8)}`,
  },
  secondary: {
    padding: toRem(8),
  },
  icon: {
    padding: toRem(8),
  },
}

export const Button = styled.button<ButtonComponentProps>`
  border: none;
  padding: ${({ type }): RuleSet<object> => color(buttonSizing[type].padding)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${toRem(6)};
  gap: ${toRem(6)};

  background-color: ${({ type }): RuleSet<object> =>
    color(buttonColors[type].background)};
  color: ${({ type }): RuleSet<object> => color(buttonColors[type].label)};
  text-transform: uppercase;
  font: ${fontButton('g')};

  svg {
    width: ${toRem(22)};

    color: ${({ type }): RuleSet<object> => color(buttonColors[type].icon)};
    path: {
      fill: ${({ type }): RuleSet<object> => color(buttonColors[type].icon)};
    }
  }

  &:hover {
    background-color: ${({ type }): RuleSet<object> =>
      color(
        buttonColors[type].backgroundHover || buttonColors[type].background,
      )};
    color: ${({ type }): RuleSet<object> =>
      color(buttonColors[type].labelHover || buttonColors[type].label)};

    svg {
      color: ${({ type }): RuleSet<object> =>
        color(buttonColors[type].iconHover || buttonColors[type].icon)};
    }
  }
`
