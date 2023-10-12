const express = require("express");
const controller = require("./categoryController");

const categoryRouter = express.Router();

categoryRouter.post("/genCat", controller.createCategory);

module.exports = categoryRouter;
