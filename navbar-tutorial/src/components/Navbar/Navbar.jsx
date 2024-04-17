import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className='navbar'>
        <div>
            <img className="logo" src={Logo} />
        </div>
        <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
            <li className='nav-item'><a href="/">Home</a></li>
            <li className='nav-item'><a href="/about">About</a></li>
            <li className='nav-item'><a href="/faq">FAQ</a></li>
            <li className='nav-item'><a href="/contact">Contact</a></li>
        </ul>
        <div className='hamburger' onClick={ handleClick } >
          { click ? (< FaTimes size={30} style={{ color: '#fff' }} />) : ( <FaBars size={30} style={{ color: '#fff' }}/> ) }
        </div>
    </div>
  )
}

export default Navbar