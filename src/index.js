import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './Components/About';
import Create from './Components/Create';
import Header from './Components/Header';
import Help from './Components/Help';
import PageNotFound from './Components/PageNotFound';
const routing = (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/create" component={Create} />
      <Route path="/help" component={Help} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById('root'));
