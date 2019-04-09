import React from 'react';
import Header from './containers/Header';
import Body from './containers/Body';
import NightDay from './containers/NightDay';

import './App.css';

function App() {
  return (
    <div>
      <NightDay />
      <Header />
      <Body />
    </div>
  );
}

export default App;
