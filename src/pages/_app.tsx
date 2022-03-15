import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color='rgba(37, 44, 96, 0.9)' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
