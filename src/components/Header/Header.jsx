import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header ">
        <h3> React </h3>
        <div className='menu'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header