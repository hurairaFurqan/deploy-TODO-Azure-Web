const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const schema = new mongoose.Schema({
    name: {
        required: [true, "Please tell us your name"],
        type: String,
        trim: true,
        unique: true,
        // maxlength: [20, "Max length exceeded"],
        // minlength: [1, "min length exceeded"],
    },
    email: {
        required: [true, "Please tell us your email"],
        type: String,
        trim: true,
        unique: true,
        // maxlength: [20, "Max length exceeded"],
        // minlength: [1, "min length exceeded"],
    },
    password: {
        required: [true, "Please tell us your password"],
        type: String,
        // maxlength: [20, "Max length exceeded"],
        // minlength: [3, "min length exceeded"],
    },
});

schema.pre("save", async function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});


schema.methods.correctPassword = async function (candidatePassword, userHash){
    return bcrypt.compareSync(candidatePassword, userHash);
    
}

const userSchema = mongoose.model("authdata", schema);
module.exports = userSchema;
