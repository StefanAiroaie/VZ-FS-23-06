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


const readServerDB = async () => {
    const todos = await fs.readFile("./todo.json", { encoding: "utf-8" });
    return JSON.parse(todos);
}



app.get("/api-todo", async (req, res) => {
    try {
        const todosJson = await readServerDB()
        res.json(todosJson);
    } catch (err) {
        res.status(500).end();
    }
});


app.post("/api-todo", async (req, res) => {
    try {
        const newTodo = req.body;
        if (!newTodo.task) {
            throw new Error("TODO underdefined")
        }
        const todosJson = await readServerDB()
        res.json(todosJson);

        const newTodos = [...todosJson, newTodo];
        await fs.writeFile("./todo.json", JSON.stringify(newTodos));
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).end();
    }
});


app.patch("/api-todo/:id", async (req, res) => {
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
        await fs.writeFile("./todo.json", JSON.stringify(todos));

        res.sendStatus(204);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});




app.delete("/api-todo/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        let todos = await readServerDB();

        todos = todos.filter(function (el) {
            return el.id !== id;
        });

        await fs.writeFile("./todo.json", JSON.stringify(todos));
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});









app.listen(PORT, () => {
    console.log(`server runs on -> http://localhost:${PORT}`);
})




// app.delete("/:id", (req, res) => {
//     const id = req.params.id;
//     try {
//         games = games.filter(function (el) {
//             return el.id !== id;
//         });

//         res.send({ rest: games });
//     } catch (error) {
//         res.send({ error: error.message });
//     }
// });



