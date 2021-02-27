import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ChallengesContext } from "../contexts/ChallengesContext";
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesContext.Provider value={'Teste'}>
        <ThemeProvider theme={theme}>
              <Component {...pageProps} />
              <GlobalStyle></GlobalStyle>
        </ThemeProvider>
    </ChallengesContext.Provider>

  ) 
}

export default MyApp

