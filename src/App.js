import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Login from './pages/Login.js';
import MainNavigation from './shared/components/Navigation/MainNavigation';

import './App.css';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path='/home'>
          <h1>Home page.</h1>
        </Route>
        <Route path='/about'>
          <h1>About page.</h1>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Redirect to='/home' />
      </Switch>
    </Router>
  );
};

export default App;
