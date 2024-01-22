import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import './App.css'
import Header from './assets/components/header/Header'

import Menu from './assets/pages/Menu'
import Program from './assets/pages/Program'
import Contact from './assets/pages/Contact'
import Photos from './assets/pages/Photos'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/menu' element={<Menu />} />
        <Route path='/program' element={<Program />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='photos' element={<Photos />} />
      </Routes>

    </>
  )
}

export default App
