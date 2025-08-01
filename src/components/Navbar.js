import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/flowers">Flowers</Link>
      <Link to="/letter">Letter</Link>
      <Link to="/gift">Gift</Link>
    </nav>
  );
};

export default Navbar;
