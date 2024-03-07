import express from "express"
import cors from "cors"


const app = express()
const PORT = 3500


const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions))


// import and use appTodo from todoapp.js"
import appTodo from "./apps/todoapp.js"
app.use(appTodo);

// import and use appBlog from blog.js"
import appBlog from "./apps/blog.js"
app.use(appBlog)


app.listen(PORT, () => {
    console.log(`server runs on -> http://localhost:${PORT}`);
})




