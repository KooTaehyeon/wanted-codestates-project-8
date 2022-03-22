import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/js/all.js';
import { createGlobalStyle } from 'styled-components';
import { RecoilRoot } from 'recoil';

const GlobalStyle = createGlobalStyle`
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
}
a {
  text-decoration:none;
  color:inherit;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
