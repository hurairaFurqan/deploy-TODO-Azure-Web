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
    const dataToSave = await user.save();
    res.status(200).json({ status: "Success", dataToSave })
})


exports.signIn = catchAsync(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email && !password) {
        res.json(400).json("email or password missing")
    }
    const user = await userModel.findOne({ email });

    if (!user) {
        res.status(400).json("no user found. Please register yourself")
    }

    const result = await user.correctPassword(password, user.password)

    if (result) {
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            iat: Math.floor(Date.now() / 1000),
            id: user._id,
        }, process.env.SECRET_KEY)

        const data = {
            token,
            user
        }

        res.status(200).json(data)
    } else {
        res.status(404).json("wrong password")
    }
})