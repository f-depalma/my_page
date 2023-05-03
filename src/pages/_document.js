import { Html, Head, Main, NextScript } from 'next/document'
import ErrorBoundary from './error-boundary'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000" />
        <title>Francesco De Palma</title>
      </Head>
      <body>
        <ErrorBoundary>
          <Main />
        </ErrorBoundary>
        <NextScript />
      </body>
    </Html>
  )
}
