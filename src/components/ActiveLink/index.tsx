import Link from 'next/link'
import { ActiveLinkContainer } from './styles'
import { useRouter } from 'next/router'
interface ActiveLinkProps {
  title: string
  path: string
  includes?: boolean
}

export function ActiveLink({ path, title, includes = false }: ActiveLinkProps) {
  const router = useRouter()

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path)
    }
    return router.pathname === path
  }

  const isActive = verifyIfIsActive()

  if (isActive) {
    return (
      <ActiveLinkContainer active={isActive}>
        <Link href={path}>{title}</Link>
      </ActiveLinkContainer>
    )
  }

  return (
    <ActiveLinkContainer>
      <Link href={path}>{title}</Link>
    </ActiveLinkContainer>
  )
}
