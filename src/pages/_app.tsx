import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt-BR',
          url: 'bookwise.vercel.app',
          siteName: 'bookwise',
        }}
      />

      <Component {...pageProps} />
    </SessionProvider>
  )
}
