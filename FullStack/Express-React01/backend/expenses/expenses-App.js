import express from "express";
import db from "./db.js";
import { z } from "zod";

const appExpenses = express.Router();

// da wir requests mit json body verarbeiten wollen,
// setzen wir die express.json middleware ein
appExpenses.use(express.json());

appExpenses.get("/", async (req, res) => {
    try {
        // wir holen uns alle einträge in der expenses collection,
        // toArray() sorgt dafür dass wir direkt daten bekommen und keinen MongoDB Cursor
        const expenses = await db.collection("expensesApp-DB").find().toArray();
        // die erhaltenen Daten schicken wir als Response an unseren Client
        res.json(expenses);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

appExpenses.post("/", async (req, res) => {
    // wir definieren ein zod Schema für unsere input daten
    const inputSchema = z.object({
        title: z.string().min(1),
        price: z.number().positive(),
    });

    // wir parsen unsere Inputdaten
    const parseResult = inputSchema.safeParse(req.body);

    if (parseResult.error) {
        // falls zod uns einen Fehler zurückgibt, brechen wir ab und schicken den Fehler
        res.status(400).json(parseResult.error);
        return;
    }

    // falls nicht schreiben wir die daten als neues dokument in unsere collection
    try {
        // mit await warten wir auf das ergebnis der operation, um es nachher an den client zu senden
        const dbResponse = await db.collection("expensesApp-DB").insertOne(parseResult.data);
        res.json(dbResponse);
    } catch (err) {
        // sollte es beim insertieren einen fehler geben, loggen wir ihn und senden Status 500
        console.error(err);
        res.sendStatus(500);
    }
});

export default appExpenses;
