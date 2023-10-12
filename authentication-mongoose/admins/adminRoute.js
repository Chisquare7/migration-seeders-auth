const express = require("express");
const controller = require("./adminController");

const adminRouter = express.Router();

adminRouter.post("/genAdmin", controller.createAdmin);

module.exports = adminRouter;
