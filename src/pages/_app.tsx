import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ChallengesProvider } from "../contexts/ChallengesContext";
function MyApp({ Component, pageProps }) {
  return (
       <ChallengesProvider>
          <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <GlobalStyle></GlobalStyle>
          </ThemeProvider>
        </ChallengesProvider>

  ) 
}

export default MyApp

