import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo/Logo.js';
import SocialButtons from './components/SocialButtons/SocialButtons.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <SocialButtons />
      </div>
    );
  }
}

export default App;
