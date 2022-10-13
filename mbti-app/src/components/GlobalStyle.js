import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'ONE-Mobile-POP', "Arial", sans-serif;
    padding-top: 1em;
    // \n이 엔터로 인식시키기 위한 설정으로 react에서만 활용 가능
    white-space: pre-wrap;
  }
  ul, ol {
    list-style: none;
    padding-left: 0px;
  }
`;
export default GlobalStyle;
