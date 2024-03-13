
import { MongoClient } from "mongodb";


// neuer client, noch unconnected
const client = new MongoClient(process.env.MONGODB_URI);

// wir warten auf die verbindung mit der datenbank
await client.connect();
console.log("Yay, connected to DB!");

// wir exportieren die datenbank die für diese Anwendung interessant ist
const db = client.db("expensesApp-DB");
export default db;