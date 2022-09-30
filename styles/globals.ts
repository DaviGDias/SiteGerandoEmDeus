import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus{
    outline: 0;
}

body {
    -webkit-font-smoothing: antialiased;
    background: #e1e1e1;
   
}

body, input, textarea, button{
    font-family: 'Montserat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`