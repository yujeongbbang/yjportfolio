import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
      <li><Link to="introduce" smooth={true} duration={500}>Introduce</Link></li>
      <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
      <li><Link to="project" smooth={true} duration={500}>Projects</Link></li>
    </ul>
  </nav>
);

export default Navbar;
