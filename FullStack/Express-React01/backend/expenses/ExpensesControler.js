import express, { json } from "express"
import mongoose from "mongoose";
import "dotenv/config"

import { Expense } from "./model.js";


const expensesControler = express.Router();


expensesControler.use(express.json())



// expensesControler.get("/expenses", async (req, res) => {
//     try {
//         const expenses = await db.newExpenses.collection("newExpenses").find().toArray();
//         // die erhaltenen Daten schicken wir als Response an unseren Client
//         res.json(expenses);
//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     }
// });





expensesControler.get("/expenses", async (req, res) => {

    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        // const newExpense = new Expense({
        //     title: req.body.title,
        //     price: req.body.price,
        //     body: req.body.body
        // });

        // await newExpense.save();

        // const newExpense = new Expense({
        //     title: "roatsssa",
        //     body: "test adauga produs",
        //     price: 57,
        //     published: false
        // });

        // await newExpense.save();


        const expense = await Expense.findOne().lean()
        const expenses = await Expense.find().lean();
        console.dir({ expenses });
        connection.connection.close();
        res.json(expenses);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }

})

expensesControler.post("/expenses", async (req, res) => {

    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        const newExpense = new Expense({
            title: req.body.title,
            price: req.body.price,
            body: req.body.body
        });

        await newExpense.save();

        // const newExpense = new Expense({
        //     title: "roatsssa",
        //     body: "test adauga produs",
        //     price: 57,
        //     published: false
        // });

        // await newExpense.save();

        const expenses = await Expense.find().lean();
        console.log({ expenses });
        connection.connection.close();
        res.json(expenses);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }

})





// expensesControler.post("/expenses", async (req, res) => {
//     try {
//         const connection = await mongoose.connect(process.env.MONGODB_URI);
//         const newExpense = new Expense({
//             title: req.body.title,
//             price: req.body.price,
//             body: req.body.body
//         });

//         await newExpense.save();

//         const expenses = await Expense.find().lean();
//         console.dir({ expenses });
//         res.json(expenses);
//         connection.connection.close();

//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     }
// })



export default expensesControler;


