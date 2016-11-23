import React, { Component } from 'react';
import './App.css';

// components
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import SocialButtons from '../SocialButtons/SocialButtons';

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
