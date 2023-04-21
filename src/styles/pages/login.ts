import { styled } from '..'

export const HomeContainer = styled('div', {
  display: 'flex',
  height: '100vh',
  width: '100vw',
})

export const HeroContainer = styled('div', {
  maxWidth: '59.8rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `url(/bg-image.png)`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '$md',
  margin: '2rem',
  position: 'relative',
})

export const Overlay = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0.5,
  background: '$gray700',
})

export const LoginContainer = styled('section', {
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LoginContent = styled('div', {
  display: 'flex',
  maxWidth: '37.2rem',
  width: '100%',
  flexDirection: 'column',

  '> strong': {
    fontWeight: 'bold',
    fontSize: '2.4rem',
  },

  '> p': {
    marginTop: '0.4rem',
    marginBottom: '6.4rem',
  },

  button: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '2rem',
    background: '$gray600',
    padding: '2rem 2.4rem',
    borderRadius: '8px',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 300ms ease-in-out',

    '&:hover': {
      filter: 'brightness(0.8)',
    },

    '& + button': {
      marginTop: '1.6rem',
    },
  },
})
