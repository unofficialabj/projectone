import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => {
  return (
        <div className="main">
    <div className="nav-bar">
        <ul className="list">

            <div className="menus">
                <li class="menu-items"> <Link to='/' className='link'>Home</Link></li>
                <li class="menu-items"> <Link to='/about' className='link'>About</Link></li>
                <li class="menu-items"> <Link to='/contact' className='link'>Contact</Link></li>
                <li class="menu-items"> <Link to='/register' className='link'>Sign Up</Link></li>
                <li class="menu-items"> <Link to='/login' className='link'>Log In</Link></li>
                </div>
                </ul>
            </div>
            </div>
  )
}

export default Navbar