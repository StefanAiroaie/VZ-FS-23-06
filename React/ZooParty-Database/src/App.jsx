
import './App.css'
import data from "./assets/data"
import Animals from './components/animals/Animals';

function App() {
  console.log(data);


  return (
    <>
      <h4>My ZOO App list</h4>
      <div className='animalsDisplay'><Animals data={data} /></div>

    </>
  )
}

export default App
