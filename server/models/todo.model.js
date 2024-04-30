const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Must be provided todo title"],
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const todoSchema = mongoose.model("todoData", schema);
module.exports = todoSchema