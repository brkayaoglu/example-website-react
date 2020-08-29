import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Carousel from './components/Carousel';
import SocialFollow from './components/Footer';




ReactDOM.render(
  <React.StrictMode>
    <App />
    <Carousel />
    <SocialFollow/>
  </React.StrictMode>,
  document.getElementById('root')
);
