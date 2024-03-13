import express from "express"
import cors from "cors"
import "dotenv/config"


const app = express()
const PORT = 3500


const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions))


// import and use appTodo from todoapp.js"
import appTodo from "./todoapp/todoapp.js"
app.use(appTodo);

// import and use appBlog from blog.js"
import appBlog from "./blog/blog.js"
app.use(appBlog)



import expensesControler from "./expenses/ExpensesControler.js"
app.use(expensesControler)




// import and use appExpenses from "./expenses/expenses-App.js"
import appExpenses from "./expenses/expenses-App.js"
// wir sagen express, dass es die im expensesRouter definierten Routen verwenden soll,
// allerdings nur für requests deren Pfad mit /expenses anfängt
app.use("/", appExpenses)




// mongoose connect in db.js, model in expenses.js und find und create in controller.js, index bleibt unverändert
// controller braucht dann nur den model import von expenses 
// und den pfad noch ändern in der URI



app.listen(PORT, () => {
    console.log(`server runs on -> http://localhost:${PORT}`);
})




