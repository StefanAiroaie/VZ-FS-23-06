import { useState } from 'react'
import './App.css'
import DarkMode from './assets/components/darkMode/DarkMode'
import Fqa from './assets/components/fqa/Fqa'


function App() {
  const [darkModeTheme, setDarkmodeTheme] = useState(false)


  return (
    <>
      <DarkMode darkModeTheme={darkModeTheme} setDarkmodeTheme={setDarkmodeTheme} />

      <h1>FAQ</h1>
      <Fqa />



    </>
  )
}

export default App
