const express = require("express");
const middleware = require("./userMiddleware");
const controller = require("./userController");

const userRouter = express.Router();


userRouter.post("/signUp", middleware.userValidation, controller.userCreation)

userRouter.post("/login", middleware.loginInfoValidation, controller.login)

module.exports = userRouter