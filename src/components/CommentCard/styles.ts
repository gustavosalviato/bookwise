import { styled } from '../../styles'

export const CommentCardContainer = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: '8px',
  padding: '2.4rem',

  header: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'space-between',
  },
})

export const ProfileContainer = styled('span', {
  display: 'flex',
  flexDirection: 'column',

  '> a': {
    color: '$gray100',
    textDecoration: 'none',
    fontWeight: '400',
    transition: 'all 300ms ease-in-out',

    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },

  '> h3': {
    fontSize: '1.6rem',
    fontWeight: '400',
  },

  '> p': {
    color: '$gray400',
    fontSize: '1.4rem',
  },
})

export const AvatarContainer = styled('div', {
  display: 'flex',
  gap: '1.6rem',

  '> img': {
    width: '4rem',
    height: '4rem',
    borderRadius: '999px',
    border: '2px solid',
    borderColor: '$purple200',
    boxSizing: 'initial',
  },
})

export const CardBody = styled('main', {
  marginTop: '3.2rem',
  display: 'flex',
  gap: '2rem',
})

export const BodyContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '> span': {
    fontWeight: '400',
    fontSize: '1.4rem',
    color: '$gray400',
    marginTop: '0.4rem',
  },

  '> p': {
    marginTop: '2rem',
    color: '$gray300',
    fontSize: '1.6rem',

    button: {
      marginLeft: '0.8rem',
      all: 'unset',
      fontWeight: 'bold',
      color: '$purple100',
      cursor: 'pointer',

      transition: 'all 300ms ease-in-out',

      '&:hover': {
        filter: 'brightness(0.8)',
      },
    },
  },
})
