import express from "express"
import fs from "fs/promises"
import cors from "cors"


const app = express()
const PORT = 3500

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions))

try {
    await fs.access("./todo.json");
} catch (err) {
    fs.writeFile("./todo.json", JSON.stringify([]));
}


app.get("/api-todo", async (req, res) => {
    try {
        const todos = await fs.readFile("./todo.json", { encoding: "utf-8" });
        const todosJson = JSON.parse(todos);
        res.json(todosJson);
    } catch (err) {
        res.status(500).end();
    }
});


app.post("/api-todo", async (req, res) => {
    try {
        const newTodo = req.body;
        console.dir({ newTodo })
        if (!newTodo.task) {
            throw new Error("TODO underdefined")
        }
        const todos = await fs.readFile("./todo.json", { encoding: "utf-8" });
        const todosJson = JSON.parse(todos);
        const newTodos = [...todosJson, newTodo];
        await fs.writeFile("./todo.json", JSON.stringify(newTodos));
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).end();
    }
});




app.listen(PORT, () => {
    console.log(`server runs on -> http://localhost:${PORT}`);
})