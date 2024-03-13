import mongoose, { Schema } from "mongoose";

const expenseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    body: { type: String, required: true },
    // published: {
    //     type: Boolean,
    //     required: true
    // },
    // createdAt: {
    //     type: Date,
    //     default: () => Date.now(),
    //     immutable: true,
    // },
});

export const Expense = mongoose.model("Expense", expenseSchema);
