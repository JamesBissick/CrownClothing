import React, { Component, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import LoginRegisterPage from './pages/login-register/login-register.component';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route path="/shop" component={ ShopPage } />
          <Route path="/login" component={ LoginRegisterPage } />
        </Switch>
      </>
    );
  }
}

export default App;
