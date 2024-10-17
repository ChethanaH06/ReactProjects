import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.jpg';
import contact from '../../assets/contact.png';
import {Link} from 'react-scroll';
const NavBar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Clients</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn'>
            <img src={contact} alt='' className='desktopMenuImg'/>Contact Me
        </button>
    </nav>
  )
}

export default NavBar;
