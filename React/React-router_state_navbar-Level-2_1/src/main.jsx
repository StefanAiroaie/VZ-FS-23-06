import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'



import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Menu from './assets/pages/Menu'
import Program from './assets/pages/Program'
import Contact from './assets/pages/Contact'
import Photos from './assets/pages/Photos'
import Home from './assets/pages/Home'
import Header from './assets/components/header/Header'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/program' element={<Program />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='photos' element={<Photos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
