import {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({theme}) => theme.colors.mainBackground};
    color: ${({theme}) => theme.colors.mainFont};
    font-weight: 400;
    letter-spacing: 0.05em;
    overflow-wrap: anywhere;
  }
`;