import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route path='/hats' component={ HatsPage } />
      </Switch>
    </>
  );
}

export default App;
