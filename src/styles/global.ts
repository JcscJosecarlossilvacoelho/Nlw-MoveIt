import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  @media(max-width : 1080px){
    html{
      font-size:93.75%
    }
  }
  @media(max-width : 120px){
    html{
      font-size:87.5%
    }
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
  body,input,textarea,button{
    font:400 16px 'Inter', sans-serif;

  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration:none;
    color:inherit
  }
`
