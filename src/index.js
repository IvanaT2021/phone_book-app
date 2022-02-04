import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Container from './components/Container';
import Navbar from './components/NavbarComponent/Navbar';

//import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Container />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


