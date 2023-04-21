import { forwardRef, InputHTMLAttributes } from 'react'
import { Input, InputTextContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (props, ref) => {
    return (
      <InputTextContainer>
        <Input
          type="text"
          placeholder="Buscar livro ou autor"
          value={props.value}
          onChange={props.onChange}
        />

        <MagnifyingGlass size={20} />
      </InputTextContainer>
    )
  },
)
