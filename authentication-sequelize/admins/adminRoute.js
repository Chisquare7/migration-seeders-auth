const express = require("express");
const middleware = require("./adminMiddleware");
const controller = require("./adminController");

const adminRouter = express.Router();

adminRouter.post("/addAdmin", middleware.validateAdmin, controller.createAdmin);

module.exports = adminRouter;
