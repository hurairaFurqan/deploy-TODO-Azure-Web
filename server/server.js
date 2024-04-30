require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./utils/dbConnect");
const userRouter = require("./routers/user.router")
const authRouter = require("./routers/auth.router");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
dbConnect();



app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("*", (req, res) => {
    res.status(500).json(`Internal Server Error at ${req.originalUrl}`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is listening at Port ${process.env.PORT}`);
})