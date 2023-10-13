const express = require("express")
const middleware = require("./itemMiddleware")
const controller = require("./itemController")
const globalMiddleware = require("../globalMiddleware/globalMiddleware")

const itemRouter = express.Router()

itemRouter.post("/addItems", middleware.validateItem, globalMiddleware.requireAuthenticate, globalMiddleware.requireAdminAuth, controller.createItem)
itemRouter.get("/getItems", globalMiddleware.requireAuthenticate, controller.getItems)

module.exports = itemRouter;