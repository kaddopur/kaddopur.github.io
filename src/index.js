import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import './index.css';

// components
import App from './App';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/projects" component={Projects} />
      <Route path="/readingList" component={Projects} />
    </Route>
  </Router>,
  document.getElementById('root')
);
