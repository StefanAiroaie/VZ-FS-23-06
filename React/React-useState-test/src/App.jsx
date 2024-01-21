import { useState } from 'react'

import './App.css'
import Header from './assets/components/header/Header'
import Main from './assets/components/header/Main'

function App() {
  const [darkMode, setDarkMode] = useState(false)


  const [kontoStand, setKontoStand] = useState(0)



  return (
    <>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main kontoStand={kontoStand} setKontoStand={setKontoStand} />


    </>
  )
}

export default App
