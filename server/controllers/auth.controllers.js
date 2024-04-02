require("dotenv").config();
const userModel = require("../models/auth.model");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");


exports.signUp = catchAsync(async (req, res) => {
    let user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    console.log(user);
    const dataToSave = await user.save();
    res.status(200).json({ status: "Success", dataToSave })
})