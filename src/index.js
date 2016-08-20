import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import './index.css';

// components
import App from './App';
import Projects from './components/Projects/Projects';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Projects}/>
      <Route path="/projects" component={Projects} />
      <Route path="/readingList" component={Projects} />
    </Route>
  </Router>,
  document.getElementById('root')
);
