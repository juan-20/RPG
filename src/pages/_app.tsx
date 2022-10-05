import { useState } from 'react'
import type { AppProps } from 'next/app'
import GlobalStyles from '../../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import dark from '../../styles/theme/dark'
import light from '../../styles/theme/light'
import NavBar from '../components/layout/navBar'

import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router'

const progress = new ProgressBar({
  size: 4,
  color: "#5762d5",
  delay: 100
});
Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)



function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark)
    console.log(theme.title)
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
