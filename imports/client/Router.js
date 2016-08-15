import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from '/imports/client/routes/Home/Home.js';

export default function renderRoutes(){
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
    </Router>
  );
}
