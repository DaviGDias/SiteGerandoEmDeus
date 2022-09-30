import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/globals'
import { defaultTheme } from '../../styles/themes/default'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
    <Component {...pageProps} />
    <Footer />
    <GlobalStyle />         
  </ThemeProvider>
)
  }
export default MyApp
