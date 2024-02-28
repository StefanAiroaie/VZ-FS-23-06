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
            <main className="flex flex-col font-mono text-slate-900 p-3, text-center gap-3 max-w-2xl m-auto" >
                <h1 className="text-2xl p-3">My Best Task App</h1>
                <div className="p-3">
                    <ToDoForm addTodo={addTodo} />
                    <section className="flex flex-col gap-3 justify-center" >
                        {
                            todos.map((todo, index) => (

                                <ToDo task={todo} key={index} />

                            ))
                        }
                    </section>
                </div>
            </main>
        </>
    );
}

export default ToDoContainer;