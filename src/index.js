import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from './Button';
import Conteudo from './Conteudo';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button />
    <Conteudo />
  </React.StrictMode>,
  document.getElementById('root')
);
