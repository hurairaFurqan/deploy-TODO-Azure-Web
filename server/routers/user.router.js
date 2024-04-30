const express = require("express");
const userController = require("../controllers/user.controller");
const protect = require("../middlewares/protect")
const router = express.Router();
const appError = require("../utils/appError")

router.use(protect);

router
    .route("/getme")
    .get(userController.getMe, userController.getUser)
module.exports = router;