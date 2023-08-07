import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
        <Link to='/'>
          <h1>Show Radar</h1>
        </Link>
        <input className='searchbar' placeholder='search for a TV show'/>
      </nav>
    </div>
  )
}
