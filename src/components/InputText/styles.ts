import { styled } from '@/styles'

export const InputTextContainer = styled('div', {
  display: 'flex',
  width: '100%',
  backgroundColor: '$gray800',
  padding: '1.4rem 2rem',
  borderRadius: '6px',
  border: '2px solid',
  borderColor: '$gray500',

  svg: {
    color: '$gray500',
  },

  '&:focus-within': {
    borderColor: '$green200',

    svg: {
      color: '$green200',
    },
  },
})

export const Input = styled('input', {
  flex: '1',
  backgroundColor: 'transparent',
  border: 0,
  outline: '0',
  color: '$gray100',

  '&::placeholder': {
    color: '$gray400',
  },
})
