import express from "express"
import fs from "fs/promises"


const appTodo = express.Router()

try {
    await fs.access("./todoapp/todo.json");
} catch (err) {
    await fs.writeFile("./todoapp/todo.json", JSON.stringify([]));
}


//reads the todoap json
const readServerDB = async () => {
    const todos = await fs.readFile("./todoapp/todo.json", { encoding: "utf-8" });
    return JSON.parse(todos);
}


//fetch the todoap
appTodo.get("/api-todo", async (req, res) => {
    try {
        const todosJson = await readServerDB()
        res.json(todosJson);
    } catch (err) {
        res.status(500).end();
    }
});


// adds to do to json
appTodo.post("/api-todo", async (req, res) => {
    try {
        const newTodo = req.body;
        if (!newTodo.task) {
            throw new Error("TODO underdefined")
        }
        const todosJson = await readServerDB()
        res.json(todosJson);
        const newTodos = [...todosJson, newTodo];
        await fs.writeFile("./todoapp/todo.json", JSON.stringify(newTodos));
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).end();
    }
});


// modifies todo to .json
appTodo.patch("/api-todo/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const patchData = req.body
        console.log("patchData", patchData);
        const todos = await readServerDB();
        const todoChangeStatus = todos.find((item) => item.id === id);
        todoChangeStatus.completed = patchData.completed
        console.log("todos", todos);
        console.log("todoChangeStatus", todoChangeStatus);
        await fs.writeFile("./todoapp/todo.json", JSON.stringify(todos));

        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});


// deleltes a taks from .json
appTodo.delete("/api-todo/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        let todos = await readServerDB();

        todos = todos.filter(function (el) {
            return el.id !== id;
        });

        await fs.writeFile("./todoapp/todo.json", JSON.stringify(todos));
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});


export default appTodo;