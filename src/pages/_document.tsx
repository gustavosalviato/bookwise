import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'
export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="/bookico.svg" type="image/svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        ></style>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
