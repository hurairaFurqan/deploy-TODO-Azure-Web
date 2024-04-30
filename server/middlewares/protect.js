require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/auth.model");
const catchAsync = require("../utils/catchAsync");

module.exports = async (req, res, next) => {
    let token;
    if (req.headers && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        res.send(401).json({ message: "no token found" })
        
    }
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        if (!decodedToken) {
            res.send(401).json({ message: "no decoded token found" });
        }
        const user = await userModel.findById(decodedToken.id);
        req.user = user;
        next();
    } catch (error) {
        res.status(400).json(error.json)
    }
}