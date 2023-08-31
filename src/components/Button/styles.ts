import styled, { RuleSet } from 'styled-components'

// helpers
import { color, font, toRem } from '@/helpers/styles'

// buttonTypes
import {
  ButtonComponentColors,
  ButtonComponentProps,
  ButtonSizing,
} from './buttonTypes'

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
  addToCart: {
    label: 'base-card',
    background: 'purple-dark',
    backgroundHover: 'purple',
    icon: 'white',
  },
}

const buttonSizing: ButtonSizing = {
  primary: {
    padding: `${toRem(12)} ${toRem(8)}`,
    iconSize: 16,
  },
  secondary: {
    padding: `0 ${toRem(8)}`,
    iconSize: 16,
  },
  addToCart: {
    padding: '0',
    iconSize: 22,
  },
}

export const Button = styled.button<ButtonComponentProps>`
  border: none;
  padding: ${({ buttonType }): string => buttonSizing[buttonType].padding};
  min-width: ${toRem(32)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: ${toRem(6)};
  gap: ${toRem(6)};

  background-color: ${({ buttonType }): RuleSet<object> =>
    color(buttonColors[buttonType].background)};
  color: ${({ buttonType }): RuleSet<object> =>
    color(buttonColors[buttonType].label)};
  text-transform: uppercase;
  ${font('button-g')}

  svg {
    width: ${({ buttonType }): string =>
      toRem(buttonSizing[buttonType].iconSize)};

    color: ${({ buttonType }): RuleSet<object> =>
      color(buttonColors[buttonType].icon)};
    path: {
      fill: ${({ buttonType }): RuleSet<object> =>
        color(buttonColors[buttonType].icon)};
    }
  }

  &:hover {
    background-color: ${({ buttonType }): RuleSet<object> =>
      color(
        buttonColors[buttonType].backgroundHover ||
          buttonColors[buttonType].background,
      )};
    color: ${({ buttonType }): RuleSet<object> =>
      color(
        buttonColors[buttonType].labelHover || buttonColors[buttonType].label,
      )};

    svg {
      color: ${({ buttonType }): RuleSet<object> =>
        color(
          buttonColors[buttonType].iconHover || buttonColors[buttonType].icon,
        )};
    }
  }
`
