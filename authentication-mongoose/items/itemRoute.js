const express = require("express");
const controller = require("./itemController");
const globalMiddleware = require("../globalMiddleware/globalMiddleware")

const itemRouter = express.Router();

itemRouter.post("/addItems", globalMiddleware.requireAdminAuth, controller.createItem);
itemRouter.get("/getItems", globalMiddleware.requireAuthenticate, controller.getItems);

module.exports = itemRouter;