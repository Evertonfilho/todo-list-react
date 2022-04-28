/* eslint-disable prettier/prettier */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background:#13293D;
    --rectangle: #295872;
  }
  *{
    padding:0;
    margin:0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px) {
      font-size:93.75%;
    }

    @media (max-width: 720px) {
      font-size:87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body,input,button,textarea,p{
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
  }

  button{ 
    cursor: pointer;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }
  
  input{
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  [disabled]{
    opacity:0.6;
    cursor:not-allowed;
  }
`

