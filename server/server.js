require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
const userRouter = require("./routers/user.router")
const authRouter = require("./routers/auth.router");
const todos = require("./routers/todo.route");
const winston = require("winston");

winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyprint: true }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
)
process.on("unhandledRejection", (error) => {
    throw error
})

winston.add(new winston.transports.File({ filename: "logfile.log" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
dbConnect();



app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/api/todos", todos)
app.use("*", (req, res) => {
    res.status(500).json(`Internal Server Error at ${req.originalUrl}`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listening at Port ${process.env.PORT}`);
})