import { useState } from "react";


const ToDoForm = ({ addTodo }) => {

  const [value, setValue] = useState("")

  const submitButton = e => {
    e.preventDefault()
    addTodo(value)
    setValue("")
    console.log("value", value);
  }

  return (
    <>
      <h3 className="text-sm p-3 ">add here your daily tasks</h3>
      <form className="flex gap-3 justify-between mb-3" onSubmit={submitButton}>
        <input
          type="text"
          name="addTask"
          id="addTask"
          onChange={(e) => setValue(e.target.value)} value={value}
          class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="write your task here"
        />
        <button
          className="bg-indigo-500 rounded hover:bg-indigo-900 text-s text-white p-3"
          type="submit">add
        </button>
      </form >
    </>
  );
}

export default ToDoForm;


/**
  const { updateBirds } = useAppState();

  const nameInputRef = useRef();
  const imageUrlInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = () => {
    const name = nameInputRef.current.value;
    const imageUrl = imageUrlInputRef.current.value;
    const description = descriptionInputRef.current.value;
    fetch("http://localhost:3000/birds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, imageUrl }),
    })
      .then(() => {
        // Falls der Request erfolgreich war, updaten wir die Liste der
        // Vögel im Context Provider
        updateBirds();
      })
      .catch((err) => {
        console.error(err);
      });
  };
 * 
 * 
 * 
 * 
 * 
 */



