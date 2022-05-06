import './App.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Content } from './features/Content';
import { Header } from './features/Header';
import { Nav } from './features/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Content />
      </div>
    </Router>
  );
}

export default App;
