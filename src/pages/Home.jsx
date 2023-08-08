import React from 'react'
import Navbar from '../components/Navbar'
import Shows from '../components/Shows'
import "./Home.css"
export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='Home'>
        <h4>One Stop for all your favourite TV shows...</h4>
        <Shows/>
      </div>
    </>
    
  )
}
