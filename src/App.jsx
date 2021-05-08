import React, { useState } from 'react';

import Homepage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
