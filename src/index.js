import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';
import Container from './components/Container';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Container />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


