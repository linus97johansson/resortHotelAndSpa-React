import { createGlobalStyle } from "styled-components";
const GlobalStlyes = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        line-height: 1.4;
        background-color: #757575;
    }
`

export default GlobalStlyes;