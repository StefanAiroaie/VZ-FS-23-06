import { useAppState } from "../context";
import { createContext, useContext, useState } from "react";


const ToDoForm = () => {

  // use state from context
  const { value, setValue, addTodo } = useAppState();

  //set the walue from input field aka adds the task
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
          className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
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




