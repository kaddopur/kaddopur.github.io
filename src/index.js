import React from 'react';
import ReactDOM from 'react-dom';
import {
  browserHistory,
  IndexRoute,
  Redirect,
  Route,
  Router,
} from 'react-router';
import './index.css';
import pages from './config/pages';

// components
import App from './components/App/App';
import Home from './components/Home/Home';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      {pages.map((page, index) => <Route key={page.title + index} {...page} />)}
      <Redirect from="*" to="/" />
    </Route>
  </Router>,
  document.querySelector('#root')
);
