import React, { Component } from 'react';
import './App.css';

// components
import Logo from './components/Logo/Logo.js';
import Nav from './components/Nav/Nav.js';
import SocialButtons from './components/SocialButtons/SocialButtons.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <SocialButtons />
        <div className="container">
          <Nav />
          <div style={{background: 'lime', height: 1000}}></div>
        </div>
      </div>
    );
  }
}

export default App;
