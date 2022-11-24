import './App.css';
import React from 'react'
import Login from './pages/Login'
import Signup from './pages/Sigup'
import Home from './pages/Home'
import View from './pages/View'
import Cart from './pages/Cart'
import Order from './pages/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route  path="/signup" element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/view' element={<View/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/order' element={<Order/>}></Route>
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;
