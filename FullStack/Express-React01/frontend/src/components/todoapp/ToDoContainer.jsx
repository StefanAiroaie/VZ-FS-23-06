import ToDoForm from "./ToDoForm";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ToDo from "./ToDo";
import { useAppState } from "../../context";
import { useEffect } from "react";
import EditToDoForm from "./EditToDoForm";
uuidv4();

const ToDoContainer = () => {


    const { todos, setTodos, getServersTasks, addTodo } = useAppState();

    useEffect(() => {
        getServersTasks();
    }, []);


    const statusTask = async (id, status) => {
        setTodos(todos.map(todo => todo.id === id
            ? { ...todo, completed: !todo.completed } : todo))

        await fetch(`http://localhost:3500/api-todo/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ completed: status })
        });


    }

    const deleteTask = async (id) => {
        setTodos(todos.filter((todo => todo.id !== id)))

        await fetch(`http://localhost:3500/api-todo/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todos)
        });
    }

    const editTask = (id, taskFiled) => {
        setTodos(todos.map(todo => (todo.id === id)
            ? { ...todo, isEditing: !todo.isEditing } : todo))
    }


    return (
        <>
            <main className="flex flex-col font-mono text-slate-900 p-3, text-center gap-3 max-w-2xl m-auto" >
                <h1 className="text-2xl p-3">My Best Task App</h1>
                <div className="p-3">
                    <h3 className="text-sm p-3 ">add here your daily tasks</h3>

                    <ToDoForm />
                    <section className="flex flex-col gap-3 justify-center" >
                        {

                            todos.map((todo, index) => (
                                todo.isEditing
                                    ? (
                                        <EditToDoForm />
                                    )
                                    :
                                    (<ToDo task={todo} key={index} statusTask={statusTask} deleteTask={deleteTask} editTask={editTask} />
                                    )
                            ))

                        }
                    </section>
                </div>
            </main>
        </>
    );
}

export default ToDoContainer;