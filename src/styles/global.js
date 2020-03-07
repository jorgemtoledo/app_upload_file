import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

export default createGlobalStyle`
* {
    margin: 0;
    paddgin: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

html, body, #root {
    height: 100%;
}
`;