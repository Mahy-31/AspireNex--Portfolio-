import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo-removebg-preview (1).png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src={logo} className='logo'/>
        <div className='menu'>
          <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='menuList'>About</Link>
          <Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Projects</Link>
          <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-100} duration={500} className='menuList'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar