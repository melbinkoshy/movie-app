import React from 'react'
import Navbar from '../components/navbar'
import Shows from '../components/shows'
import "./Home.css"
export default function Home() {
  return (
    <>
      <div className="navbar-wrapper">
        <Navbar/>
      </div>
      <div className='Home'>
        <h4>One Stop for all your favourite TV shows...</h4>
      <div className="shows">
        <Shows/>
      </div>
      </div>
    </>
    
  )
}
