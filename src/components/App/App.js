import React, { Component } from 'react';
import './App.css';

// components
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import SocialButtons from '../SocialButtons/SocialButtons';
import { StickyContainer, Sticky } from 'react-sticky';

class App extends Component {
  render() {
    return (
      <StickyContainer>
        <div className="App">
          <Logo />
          <SocialButtons />
          <Sticky stickyStyle={{boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'}} topOffset={1}>
            <Nav />
          </Sticky>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </StickyContainer>
    );
  }
}

export default App;
