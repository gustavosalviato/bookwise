import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  width: '66rem',
  right: '0',
  bottom: '0',
  top: '0',
  background: '$gray800',
  display: 'flex',
  flexDirection: 'column',
  padding: '6.4rem 4.8rem',

  overflowY: 'auto',
})

export const BookDetail = styled('div', {
  backgroundColor: '$gray700',
  padding: '1.6rem 3.2rem',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
})

export const DetailContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled(Dialog.Title, {
  fontWeight: 'bold',
  fontSize: '1.8rem',
  lineHeight: '$short',

  '> p': {
    fontSize: ' 1.4rem',
    color: '$gray300',
    marginTop: '0.4rem',
  },
})

export const RatingSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',

  '> p': {
    fontSize: '1.4rem',
    color: '$gray400',
  },
})

export const BookInfo = styled('div', {
  display: 'flex',
  gap: '3.2rem',
})

export const Divider = styled('div', {
  width: '100%',
  borderTop: '1px solid $gray600',
  paddingTop: '4rem',
  marginTop: '4rem',
})

export const About = styled('div', {
  display: 'flex',
  gap: '6rem',
})

export const AboutSection = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  paddingBottom: '1.6rem',

  '> div': {
    display: 'flex',
    flexDirection: 'column',

    p: {
      fontSize: '1.4rem',
      color: '$gray300',
    },
  },
})

export const CommentsSection = styled('div', {
  marginTop: '3.2rem',

  '> header': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    button: {
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

export const CommentItem = styled('div', {
  padding: '2.4rem',
  marginTop: '2.4rem',
  borderRadius: '8px',
  backgroundColor: '$gray700',

  '& + &': {
    marginTop: '1.2rem',
  },

  '> header': {
    display: 'flex',
    justifyContent: 'space-between',
  },

  '.comment': {
    marginTop: '2rem',
    color: '$gray300',
  },

  variants: {
    user: {
      true: {
        backgroundColor: '$gray600',
      },
    },
  },
})

export const ProfileImage = styled('img', {
  width: '4rem',
  height: '4rem',
  boxSizing: 'initial',
  border: '1px solid $purple200',
  borderRadius: '999px',
})

export const ProfileInfo = styled('div', {
  display: 'flex',
  gap: '1.6rem',

  '> div > p': {
    color: '$gray400',
  },
})

export const CloseButton = styled('button', {
  position: 'absolute',

  width: '2.4rem',
  height: '2.4rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  right: '4.8rem',
  top: '1.6rem',

  border: 0,
  background: 'transparent',
  color: '$gray400',

  transition: 'all 300ms ease-in-out',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

export const UserCommentItem = styled('form', {
  backgroundColor: '$gray700',
  borderRadius: '6px',
  padding: '2.4rem',
  marginTop: '1.6rem',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  img: {
    width: '4rem',
    height: '4rem',

    borderRadius: '999px',
    boxSizing: 'initial',
    border: '1px solid $purple100',
  },
})

export const UserInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
})

export const TextArea = styled('textarea', {
  border: 0,
  backgroundColor: '$gray800',
  width: '100%',
  borderRadius: '8px',
  marginTop: '2.4rem',
  outline: 0,
  padding: '1.6rem 2rem',
  resize: 'none',
  color: '$gray200',
  height: '13.6rem',

  '&::placeholder': {
    color: '$gray400',
  },
})

export const SectionActions = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  gap: '0.8rem',

  button: {
    all: 'unset',
    backgroundColor: '$gray600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.8rem',
    borderRadius: '4px',
    cursor: ' pointer',
    transition: 'all 300ms ease-in-out',

    '&:hover': {
      filter: 'brightness(0.8)',
    },
  },
})
