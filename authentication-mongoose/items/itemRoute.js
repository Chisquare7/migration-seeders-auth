const express = require("express");
const controller = require("./itemController");

const itemRouter = express.Router();

itemRouter.post("/addItems", controller.createItem);
itemRouter.get("/getItems", controller.getItems);

module.exports = itemRouter;
