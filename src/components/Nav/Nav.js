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
    path: '/reading-list'
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
    {pages.map((page, index) => {
      return <NavItem page={page} key={page.title + index} />
    })}
  </div>
);

export default Nav;
