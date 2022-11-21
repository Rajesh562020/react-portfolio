import React from 'react';
import {Link} from 'react-router-dom';
import './NavbarStyle.css';
const Navbar = () => {
  return (
    <div className='header'>
        <Link to='/'>
            <h1>RS</h1>
        </Link>
        <ul className='nav-menu'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/picturelog'>PictureLog</Link>
            </li>
            <li>
                <Link to='/resume'>Resume</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;