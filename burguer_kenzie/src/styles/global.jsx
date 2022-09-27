import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    padding-bottom: 42px;
}

ul {
    list-style: none;
}
`;

export default GlobalStyle;
