import React from 'react'
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = ({ size }) => {
  return (
    <div className='navbar__container'>
      <div className='navbar__wrapper'>
        <div className="logo"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Sonic Strings</Link></div>

        <div className="navbar__menu">
          <ul className="nav__menu">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><li className="nav__item">Home</li></Link>
            <Link to="/guitars" style={{ textDecoration: 'none', color: 'white' }}><li className="nav__item">Guitars</li></Link>
          </ul>
          
        </div>

        <div className="cart">
        <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
          <i className="cart__icon bx bx-cart"></i>
          </Link>
          <span>{size}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
