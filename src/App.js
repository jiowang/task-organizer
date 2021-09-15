import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js'
import Login from './pages/Login.js';
import Settings from './pages/Settings.js';
import MyLists from './pages/MyLists.js';
import AddList from './pages/lists/AddList.js';
import AddContent from './pages/lists/AddContent.js';
import MyList from './pages/lists/MyList.js'
import EditContent from './pages/lists/EditContent.js';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Footer from './shared/components/Footer';

import Test from './DELETE/Test.js';


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
          <MyLists />
        </Route>
        <Route path='/:userId/settings' exact>
          <Settings />
        </Route>
        <Route path='/:userId/myLists/new' exact>
          <AddList />
        </Route>
        <Route path='/:userId/myLists/:listId/new' exact>
          <AddContent />
        </Route>
        <Route path='/:userId/myLists/:listId/:contentId' exact>
          <EditContent />
        </Route>
        <Route path='/:userId/myLists/:listId' exact>
          <MyList />
        </Route>

        <Route path='/test' exact>
          <Test />
        </Route>

        <Redirect to='/home' />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
