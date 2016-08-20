import React, { Component } from 'react';
import './App.css';

// components
import Logo from './components/Logo/Logo';
import Nav from './components/Nav/Nav';
import SocialButtons from './components/SocialButtons/SocialButtons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <SocialButtons />
        <div className="container">
          <Nav />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
