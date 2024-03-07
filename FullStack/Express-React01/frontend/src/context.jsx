import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import { fetchBlogData } from "./api"


const StateContext = createContext({
    todos: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {



    // input filed value aka task
    const [value, setValue] = useState()
    const [todos, setTodos] = useState([]);


    //import blog articles
    const [blogArticles, setBlogArticles] = useState([])




    const getServersTasks = () => {
        fetch('http://localhost:3500/api-todo')
            .then((response) => response.json())
            .then((todos) => {
                console.log("todos aici", todos);
                setTodos(todos);
            });

    };


    const fetchBlogData = () => {
        fetch("http://localhost:3500/blogdata")
            .then((response) => response.json())

            .then((data) => {
                console.log("aici trebuei sa vin datele de pe server", data);
                setBlogArticles(data);
            });

    }



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
        <StateContext.Provider value={{ todos, getServersTasks, setTodos, value, setValue, addTodo, blogArticles, setBlogArticles, fetchBlogData }}>
            {children}
        </StateContext.Provider>
    );
};