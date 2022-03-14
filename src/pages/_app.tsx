import { useState } from 'react'
import type { AppProps } from 'next/app'
import GlobalStyles from '../../styles/GlobalStyles'
import NavBar from '../component/navBar'
import { ThemeProvider } from 'styled-components'
import dark from '../../styles/theme/dark'
import light from '../../styles/theme/light'

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
