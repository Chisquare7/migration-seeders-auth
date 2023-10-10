const express = require("express");
const middleware = require("./categoryMiddleware");
const controller = require("./categoryController");

const categoryRouter = express.Router();

categoryRouter.post("/addCat", middleware.validateItemCategory, controller.createItemCategory)

module.exports = categoryRouter