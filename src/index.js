/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Carousel from './components/Carousel';
import SocialFollow from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

const HomePage = () => {
  return(<div>
    <App />
    <Carousel />
    <SocialFollow />
  </div>)
};
const AboutPage = () => {
  return(<div>
    <App />
    <p>Hello from about</p>
  </div>)
};
const ContactPage = () => {
  return(<div>
    <App />
    <p>Hello from contact</p>
  </div>)
};
const PortfoliosPage = () => {
  return(<div>
    <App />
    <p>Hello from portfolios</p>
  </div>)
};

const DetailPage = () => {
  return(<div>
    <App />
    <p>Hello from detail</p>
  </div>)
};

const NotFoundPage = () => {
  return(
    <div>
    <p>404!</p>
    </div>
  )
}


const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/detail" component={DetailPage} />
      <Route path="/portfolios" component={PortfoliosPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);



ReactDOM.render(
  routes,
  document.getElementById('root')
);
