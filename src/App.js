import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js'
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Settings from './pages/Settings.js';
import MyLists from './pages/MyLists.js';
import AddList from './pages/lists/AddList.js';
import MyList from './pages/lists/MyList.js'
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/Footer';
import { AuthContext } from './shared/context/auth-context.js';

import Test from './DELETE/Test.js';
import { validate, VALIDATOR_REQUIRE } from './shared/util/validators.js';
import FormUI from './shared/Form/FormUI.js';


import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (!isLoggedIn) {
    routes = (
      <Switch>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/signup' exact>
          <Signup />
        </Route>
        <Redirect to='/home' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path='/:userId/myLists' exact>
          <MyLists />
        </Route>
        <Route path='/:userId/settings' exact>
          <Settings />
        </Route>
        <Route path='/:userId/myLists/new' exact>
          <AddList />
        </Route>
        <Route path='/:userId/myLists/:listId' exact>
          <MyList />
        </Route>
        <Redirect to='/u1/myLists' />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
    value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
