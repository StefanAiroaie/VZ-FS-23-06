
import './App.css'
import ToDoList from './componets/todolist/ToDoList'

function App() {

  var myToDoList = [];
  // Creare array de 20 de obiecte cu cheia "todo"
  for (var i = 0; i < 20; i++) {
    var task = {
      todo: "Task " + (i + 1)
    };
    myToDoList.push(task);
  }


  return (
    <>

      <ToDoList myToDoList={myToDoList} />
    </>
  )
}

export default App
