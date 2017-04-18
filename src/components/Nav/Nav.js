import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import pages from '../../config/pages';

const NavItem = props => {
  const {
    path,
    title,
  } = props.page;

  return (
    <NavLink to={path} className="NavItem" activeClassName="active">
      <div className="itemTitle">{title}</div>
      <span className="indicator" />
    </NavLink>
  );
};

const Nav = () => (
  <div className="Nav">
    {pages.map((page, index) => {
      return <NavItem page={page} key={page.title + index} />;
    })}
  </div>
);

export default Nav;
