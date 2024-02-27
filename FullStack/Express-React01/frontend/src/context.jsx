import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    todos: [],
});

export const useAppState = () => useContext(StateContext);

export const AppStateProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const updateTasks = () => {
        fetch('http://localhost:3500/api-todo')
            .then((response) => response.json())
            .then((todos) => {
                setTodos(todos);
            });
    };

    return (
        <StateContext.Provider value={{ todos, updateTasks, setTodos }}>
            {children}
        </StateContext.Provider>
    );
};