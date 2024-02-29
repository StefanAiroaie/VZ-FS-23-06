import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const StateContext = createContext({
    todos: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {

    // input filed value aka task
    const [value, setValue] = useState("")

    const [todos, setTodos] = useState([]);


    const getServersTasks = () => {
        fetch('http://localhost:3500/api-todo')
            .then((response) => response.json())
            .then((todos) => {
                setTodos(todos);
            });
    };





    const addTodo = todo => {
        // new task
        const newTodo = {
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false
        }
        setTodos([...todos, newTodo])
        // fetch the task
        fetch('http://localhost:3500/api-todo', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo)

        })
            .then(() => {
                getServersTasks();
            })
            .catch((err) => {
                console.error(err);
            })
    }










    return (
        <StateContext.Provider value={{ todos, getServersTasks, setTodos, value, setValue, addTodo }}>
            {children}
        </StateContext.Provider>
    );
};