import { useState } from "react";

const ToDo = ({ task, statusTask, deleteTask, editTask }) => {

    return (
        <>

            <div className={`flex gap-2 justify-between border rounded p-3 ${task.completed ? "bg-green-200 opacity-20" : ""}`}>
                <div onClick={() => statusTask(task.id, !task.completed)} className="w-11/12" >
                    <p className={`text-left ${task.completed ? "line-through" : ""}`}>{task.task}</p>
                </div>

                {/* <button onClick={() => editTask(task.id)}><p className="bg-green-500 p-1 text-[0.7rem] rounded">edit</p></button> */}
                <button onClick={() => deleteTask(task.id)}><p className="bg-red-300 p-1 text-[0.7rem] rounded">delete</p></button>
            </div >

        </>
    );
}

export default ToDo;