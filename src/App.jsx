import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { Routes,Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
        {/* <Home/> */}
      
    </>
  )
}

export default App
