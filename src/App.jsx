import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Menu from './pages/Menu'
import Rules from './pages/Rules'
import Play from './pages/Play'

import './App.css'

function App() {

  return (
    <>
      <Routes> 
        <Route path="/" element={<Menu />}/>
        <Route path="/rules" element={<Rules />}/>
        <Route path="/play" element={<Play />}/>
      </Routes>
    </>
  )
}

export default App
