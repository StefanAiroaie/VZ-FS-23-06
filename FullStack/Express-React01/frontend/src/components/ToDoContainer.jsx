import ToDoForm from "./ToDoForm";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ToDo from "./ToDo";
import { useAppState } from "../context";
import { useEffect } from "react";
uuidv4();

const ToDoContainer = () => {


    const { todos, setTodos, updateTasks } = useAppState();
    useEffect(() => {
        updateTasks();
    }, []);

    console.dir("to dos from server", { todos });


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
                updateTasks();
            })
            .catch((err) => {
                console.error(err);
            })
    }


    return (
        <>
            <h3>hier ist to do container</h3>
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <ToDo task={todo} key={index} />
            ))
            }
        </>
    );
}

export default ToDoContainer;