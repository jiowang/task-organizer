import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js'
import Login from './pages/Login.js';
import MyLists from './pages/MyLists.js';
import MyList from './pages/users/MyList.js'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/Footer';

import './App.css';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/about'exact>
          <About />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/:userId/myLists' exact>
          <MyLists/>
        </Route>
        <Route path='/:userId/myLists/:listId' exact>
          <MyList/>
        </Route>
        <Redirect to='/home' />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
