import React, { useState } from 'react';

import Homepage from './components/homepage.component';

import './App.css';

function App() {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
