import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import pages from './config/pages';

// components
import App from './App';
import Home from './components/Home/Home';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      {pages.map((page, index) => <Route key={page.title + index} {...page} />)}
    </Route>
  </Router>,
  document.getElementById('root')
);
