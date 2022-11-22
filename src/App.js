import './App.css';
import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Sigup'
import Home from './pages/Home'
import View from './pages/View'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route  path="/signup" element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/view' element={<View/>}></Route>
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;
