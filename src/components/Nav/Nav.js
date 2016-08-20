import React from 'react';
import { Link } from 'react-router'
import './Nav.css';

const pages = [
  {
    title: 'Projects',
    path: '/projects'
  },
  {
    title: 'Reading List',
    path: '/readingList'
  }
];

const NavItem = (props) => {
  const {
    path,
    title
  } = props.page;

  return (
    <Link to={path} className="NavItem" activeClassName="active">
      <div className="itemTitle">{title}</div>
      <span className="indicator" />
    </Link>
  );
}

const Nav = () => (
  <div className="Nav cf">
    {pages.map(page => <NavItem page={page} />)}
  </div>
);

export default Nav;
