import React from 'react'
import "./Navbar.css"

export default function Home() {
  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
        <h1>Show Radar</h1>
        <input className='searchbar' placeholder='search for a TV show'/>
      </nav>
    </div>
  )
}
