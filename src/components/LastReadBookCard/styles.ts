import { styled } from '@/styles'

export const LastReadBookCardContainer = styled('div', {
  display: 'flex',
  gap: '2.4rem',
  marginTop: '1.6rem',
  backgroundColor: '$gray600',
  padding: '2rem 2.4rem',
  borderRadius: '8px',
})

export const BookImage = styled('img', {
  borderRadius: '4px',
  width: '10.8rem',
  height: '15.2rem',
})

export const CardHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> p': {
    fontSize: '1.4rem',
    color: '$gray300',
  },
})

export const LastReadBookCardBody = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '> strong': {
    display: 'block',
    marginTop: '1.2rem',
    lineHeight: '$short',
  },

  '> span': {
    color: '$gray400',
    lineHeight: '$base',
    marginTop: '0.4rem',
  },

  '> p': {
    marginTop: ' 2.4rem',
    lineHeight: '$base',
    color: '$gray300',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 4,
  },
})
