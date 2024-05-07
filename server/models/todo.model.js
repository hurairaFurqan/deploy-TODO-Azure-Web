// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const schema = new mongoose.Schema({
//     author: String,
//     date: { type: Date, default: new Date() },
//     isComplete: Boolean,
//     name: {
//         type: String,
//         required: true,
//     },
//     _id: String,
// });

// const todoSchema = mongoose.model("dotos", schema);
// module.exports = todoSchema;


// models/Todo.js
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Todo', TodoSchema);