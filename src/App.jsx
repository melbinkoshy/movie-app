import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import MovieDetail from './pages/MovieDetail'


function App() {

  return (
    <>
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<MovieDetail/>}/>
        </Routes>
      
    </>
  )
}

export default App
