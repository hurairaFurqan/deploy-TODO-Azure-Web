const userSchema = require("../models/auth.model");
const catchAsync = require("../utils/catchAsync");

exports.getMe = catchAsync(async (req, res, next) => {
    req.params = req.user;
    next();
})

exports.getUser = catchAsync(async (req, res) => {
    
    const user = req.params;
    if (user) {
        const person = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }

        return res.json(person)
    }
    return res.status(401).json(`no user found ${req.params.id}`);
})