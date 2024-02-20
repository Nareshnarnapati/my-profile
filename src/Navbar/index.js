import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <nav className="nav">
      <div className="bg-con">
        <div>
        <li >
            <Link to="/" className="portopolio">Portfolio.</Link>
          </li>
        </div>

        <ul className="section">
          <li >
            <Link to="/" className="heading">Home</Link>
          </li>
          <li>
            <Link to="/about" className="heading">About</Link>
          </li>
          <li >
            <Link to="/skills" className="heading">Skills</Link>
          </li>
          <li >
            <Link to="/projects" className="heading">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="heading">Contact</Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Header;
