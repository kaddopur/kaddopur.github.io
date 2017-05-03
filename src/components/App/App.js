import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import SocialButtons from '../SocialButtons/SocialButtons';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import ReadingList from '../ReadingList/ReadingList';
import { StickyContainer, Sticky } from 'react-sticky';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <StickyContainer>
          <div className="App">
            <Logo />
            <SocialButtons />
            <Route
              path="/"
              render={() => (
                <Sticky stickyStyle={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }} topOffset={1}>
                  <Nav />
                </Sticky>
              )}
            />
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/skills" component={Skills} />
              <Route path="/reading-list" component={ReadingList} />
            </div>
          </div>
        </StickyContainer>
      </Router>
    );
  }
}

export default App;
