require("dotenv").config();
const todoModel = require("../models/todo.model");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");


exports.todoAdd = catchAsync(async (req, res) => {
    let todo = new todoModel({
        author: req.body.author,
        date: req.body.date,
        isComplete: req.body.isComplete,
        name: req.body.name,
        _id: req.body._id,
    })
    const dataToSave = await todo.save();
    res.status(200).json({ status: "Success", dataToSave })
})
