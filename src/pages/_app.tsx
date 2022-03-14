import type { AppProps } from 'next/app'
import GlobalStyles from '../../styles/GlobalStyles'
import NavBar from '../component/navBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
