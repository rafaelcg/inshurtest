import React from 'react';
import Profile from '../Profile';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
      </header>
      <div id="content">
        <Profile />
      </div>
    </div>
  );
}

export default App;
