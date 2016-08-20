import React from 'react';
import './Nav.css';

const pages = [
  {
    title: 'Projects',
    path: '#projects'
  },
  {
    title: 'Reading List',
    path: '#reading_list'
  }
];

const NavItem = (props) => {
  const {
    path,
    title
  } = props.page;

  return (
    <a className="NavItem" href={path}>
      <div className="itemTitle">{title}</div>
      <span className="indicator" />
    </a>
  );
}

const Nav = () => (
  <div className="Nav cf">
    {pages.map(page => <NavItem page={page} />)}
  </div>
);

export default Nav;
