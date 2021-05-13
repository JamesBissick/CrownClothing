import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

import './App.css';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route path="/shop" component={ ShopPage } />
      </Switch>
    </>
  );
}

export default App;
