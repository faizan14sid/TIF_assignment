import Layout from '../components/Layout'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
