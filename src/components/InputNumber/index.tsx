// components
import { Button, Container, Counter } from './styles'
import { ReactComponent as MinusIcon } from '@/assets/icons/minus-bold.svg'
import { ReactComponent as PlusIcon } from '@/assets/icons/plus-bold.svg'

// types
import { InputNumberProps as Props } from './types'

export function InputNumber({ count, setCount }: Props) {
  return (
    <Container>
      <Button
        onClick={() => {
          if (count - 1 === 0) return

          setCount(count - 1)
        }}
      >
        <MinusIcon />
      </Button>
      <Counter>{count}</Counter>
      <Button onClick={() => setCount(count + 1)}>
        <PlusIcon />
      </Button>
    </Container>
  )
}
