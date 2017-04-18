import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => (
  <Link to="/" className="Logo">
    <div>CHAOJU</div>
    <div>HUANG</div>
  </Link>
);

export default Logo;
