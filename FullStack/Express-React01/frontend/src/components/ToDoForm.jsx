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
            <h3>hier ist to do form</h3>
            <form onSubmit={submitButton}>
                <input type="text" name="" id="" placeholder="Write your task here" onChange={(e) => setValue(e.target.value)} value={value} />
                <button type="submit">add the task</button>
            </form>
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



