import { useState } from 'react'
import type { AppProps } from 'next/app'
import GlobalStyles from '../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import dark from '../../styles/theme/dark'
import light from '../../styles/theme/light'
import NavBar from '../components/layout/navBar'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
      <GlobalStyles />
      <NavBar toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  )
}

export default MyApp
